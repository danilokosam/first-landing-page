import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router";
import { ROUTES } from "../constants/routes";
import { GetIconForRoute } from "../utils/GetIconForRoute";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { Sidebar, SidebarItem } from "./Sidebar";

export const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const prevLocationRef = useRef(location);
  const midPoint = Math.ceil(ROUTES.length / 2); // Calcula el punto medio para las rutas

  const handleNav = () => {
    console.log("Botón hamburguesa clicado, expanded actual:", expanded);
    setExpanded((curr) => !curr);
  };

  // Cierra el sidebar cuando cambia la ruta
  useEffect(() => {
    if (location !== prevLocationRef.current && expanded) {
      setExpanded(false);
    }
    prevLocationRef.current = location; // Actualiza la referencia con la nueva ubicación
  }, [location, expanded]);

  // Log para depuración
  useEffect(() => {
    console.log("El estado expanded cambió a:", expanded);
  }, [expanded]);

  // Cerrar el sidebar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        expanded &&
        !e.target.closest(".sidebar") &&
        !e.target.closest(".menu-button")
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded]);

  return (
    <header className="bg-white">
      <nav className="flex w-full items-center justify-center p-3">
        <div className="container flex items-center justify-between gap-11 lg:justify-center">
          <div className="block p-2 md:hidden">
            <Logo />
          </div>
          {/* Botón para abrir el menú en móvil, solo visible cuando el sidebar está cerrado */}
          <button
            className={`menu-button block cursor-pointer rounded-lg bg-gray-300 p-1.5 transition-all duration-200 ease-in-out hover:bg-gray-100 md:hidden ${
              expanded ? "invisible" : "visible"
            }`}
            onClick={handleNav}
            aria-label="Toggle sidebar"
          >
            <RxHamburgerMenu size={20} />
          </button>

          {/* Enlaces de escritorio */}
          <div className="hidden w-full justify-center gap-11 md:flex md:items-center md:gap-6 lg:gap-12">
            {/* Primera mitad de los enlaces */}
            <NavLinks routes={ROUTES.slice(0, midPoint)} />

            {/* Logo */}
            <div className="hidden md:block">
              <Logo className="h-20" />
            </div>

            {/* Segunda mitad de los enlaces */}
            <NavLinks routes={ROUTES.slice(midPoint)} />
          </div>
        </div>

        {/* Sidebar móvil */}
        <div
          className={`sidebar fixed top-0 z-50 h-dvh w-4/6 transition-all duration-500 ease-in-out md:hidden ${
            expanded ? "left-0" : "left-[-100%]"
          }`}
        >
          <Sidebar expanded={expanded} setExpanded={setExpanded}>
            {ROUTES.map((route) => {
              return (
                <SidebarItem
                  key={route.name}
                  icon={GetIconForRoute(route.name)}
                  text={route.name}
                  to={route.path}
                />
              );
            })}
          </Sidebar>
        </div>
      </nav>
    </header>
  );
};

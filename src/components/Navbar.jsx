import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { LuChevronLast } from "react-icons/lu";
import { NavLink } from "react-router";
import { ROUTES } from "../constants/routes";
import { GetIconForRoute } from "../utils/GetIconForRoute";
import { Sidebar, SidebarItem } from "./Sidebar";

export const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNav = () => setExpanded((curr) => !curr);

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
    <nav className="flex w-full items-center justify-center bg-white p-4">
      <div className="container flex items-center justify-end gap-11 lg:justify-center">
        {/* Botón para abrir el menú en móvil, solo visible cuando el sidebar está cerrado */}
        <button
          className={`menu-button block rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100 md:hidden ${
            expanded ? "invisible" : "visible"
          }`}
          onClick={handleNav}
          aria-label="Toggle sidebar"
        >
          <LuChevronLast /> {/* O LuChevronFirst, según tu caso */}
        </button>

        {/* Enlaces de escritorio */}
        <div className="hidden w-full justify-center gap-11 md:flex md:items-center md:gap-6 lg:gap-12">
          {/* Primera mitad de los enlaces */}
          <ul className="flex space-x-10 font-medium md:text-sm lg:text-base">
            {ROUTES.slice(0, 3).map((route) => (
              <li key={route.name}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    `no-underline transition-colors duration-300 ${
                      isActive
                        ? "pointer-events-none text-yellow-600"
                        : "text-slate-950 hover:text-yellow-600"
                    }`
                  }
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <img
              src="/src/assets/images/logo.png"
              alt="Logo"
              className="h-20"
            />
          </div>

          {/* Segunda mitad de los enlaces */}
          <ul className="flex space-x-10 font-medium md:text-sm lg:text-base">
            {ROUTES.slice(3).map((route) => (
              <li key={route.name}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    `no-underline transition-colors duration-300 ${
                      isActive
                        ? "pointer-events-none text-yellow-600"
                        : "text-slate-950 hover:text-yellow-600"
                    }`
                  }
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sidebar móvil */}
      <div
        className={`sidebar fixed top-0 z-50 h-full transition-all duration-500 ease-in-out md:hidden ${
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
              />
            );
          })}
        </Sidebar>
      </div>
    </nav>
  );
};

import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router";
import { ROUTES } from "../constants/routes";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        nav &&
        !e.target.closest(".mobile-menu") &&
        !e.target.closest(".menu-button")
      ) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [nav]);

  return (
    <nav className="flex w-full items-center justify-center bg-white p-4">
      <div className="container flex items-center justify-end gap-11 lg:justify-center">
        {/* Botón para abrir el menú en móvil */}
        <button
          className="menu-button block md:hidden"
          onClick={handleNav}
          aria-label="Toggle navigation menu"
        >
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
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

      {/* Menú móvil */}
      <div
        className={`mobile-menu fixed top-0 h-full w-[60%] max-w-sm bg-white p-5 duration-500 ease-in-out md:hidden ${
          nav ? "left-0" : "left-[-100%]"
        }`}
      >
        <ul className="flex flex-col space-y-4">
          {ROUTES.map((route) => (
            <li
              key={route.name}
              role="menuitem"
              tabIndex={0}
              onClick={() => setNav(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setNav(false);
                }
              }}
            >
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `block text-xl no-underline transition-colors duration-300 ${
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
    </nav>
  );
};

import { NavLink } from "react-router";
import { ROUTES } from "../constants/routes";

export const Navbar = () => {
  return (
    <nav className="bg-stone-50 p-4">
      <div className="flex w-full items-center justify-center gap-11">
        {/* Primera mitad de los enlaces */}
        <ul className="flex space-x-10">
          {ROUTES.slice(0, 3).map((route) => (
            <li key={route.name}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `no-underline ${isActive ? "pointer-events-none text-yellow-600" : "text-slate-950"}`
                }
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <div>
          <img src="/src/assets/images/logo.png" alt="Logo" className="h-20" />
        </div>

        {/* Segunda mitad de los enlaces */}
        <ul className="flex space-x-10">
          {ROUTES.slice(3).map((route) => (
            <li key={route.name}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `no-underline ${isActive ? "pointer-events-none text-yellow-600" : "text-slate-950"}`
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

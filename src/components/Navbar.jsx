import { NavLink } from "react-router";
import { ROUTES } from "../constants/routes";

export const Navbar = () => {
  return (
    <nav className="bg-cyan-600 p-6">
      <ul className="flex space-x-4">
        {ROUTES.map((route) => (
          <li key={route.name}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                `no-underline ${isActive ? "pointer-events-none text-slate-950" : "text-white"}`
              }
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

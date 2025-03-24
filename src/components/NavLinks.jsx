import { NavLink } from "react-router";

export const NavLinks = ({ routes }) => {
  return (
    <ul className="flex space-x-10 font-medium md:text-sm lg:text-base">
      {routes.map((route) => (
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
  );
};

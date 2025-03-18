import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav className="">
      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              pointerEvents: isActive ? "none" : "auto",
              color: isActive ? "#888" : "#000",
              textDecoration: "none",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              pointerEvents: isActive ? "none" : "auto",
              color: isActive ? "#888" : "#000",
              textDecoration: "none",
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              pointerEvents: isActive ? "none" : "auto",
              color: isActive ? "#888" : "#000",
              textDecoration: "none",
            })}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

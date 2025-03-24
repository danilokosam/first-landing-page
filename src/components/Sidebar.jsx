import { createContext, useContext } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { LuChevronLast } from "react-icons/lu";
import { NavLink } from "react-router";
import logo from "../assets/images/logo.png";

const SidebarContext = createContext();

export const Sidebar = ({ children, expanded, setExpanded }) => {
  return (
    <aside className="h-screen">
      <nav
        className="flex h-full flex-col border-r shadow-sm"
        style={{
          background: "linear-gradient(to top left, #E3FF73, #E27C39)",
        }}
      >
        <div className="flex items-center justify-between p-4 pb-2">
          <img
            src={logo}
            className={`overflow-hidden transition-all ${expanded ? "h-10" : "h-0 w-0"}`}
            alt="logo"
          />
          {/*  Botón para cerrar el sidebar en móviles */}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="cursor-pointer rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
          >
            {expanded ? <IoMdClose /> : <LuChevronLast />}
          </button>
          {/*  Botón para cerrar el sidebar en móviles */}
        </div>

        <SidebarContext.Provider value={{ expanded, setExpanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {/* Perfil de Usuario */}
        <div className="flex border-t p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="name"
            className="h-10 w-10 rounded-md"
          />
          <div
            className={`flex items-center justify-between overflow-hidden transition-all ${expanded ? "ml-3 w-52" : "w-0"} `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <FiMoreVertical size={20} />
          </div>
        </div>
        {/* Perfil de Usuario */}
      </nav>
    </aside>
  );
};

export const SidebarItem = ({ icon, text, to, alert }) => {
  const { expanded, setExpanded } = useContext(SidebarContext);

  const handleClick = () => {
    if (expanded) {
      setExpanded(false);
    }
  };
  return (
    <li className="group relative my-1">
      <NavLink
        to={to}
        onClick={handleClick}
        className={({ isActive }) =>
          `flex items-center rounded-md px-3 py-2 font-medium transition-colors ${
            isActive
              ? "bg-white text-yellow-600"
              : "text-black hover:bg-indigo-50"
          }`
        }
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "ml-3 w-52" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 h-2 w-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}
      </NavLink>
      {!expanded && (
        <div
          className={
            "invisible absolute left-full ml-6 -translate-x-3 rounded-md bg-indigo-100 px-2 py-1 text-sm text-indigo-800 opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100"
          }
        >
          {text}
        </div>
      )}
    </li>
  );
};

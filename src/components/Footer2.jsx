import React from "react";
import { Icons } from "../assets/icons/react-icons/icons";

export const Footer2 = () => {
  return (
    <footer className="bg-[#FAE161] py-6 text-black">
      {/* Contenedor */}
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <span className="text-xs font-bold select-none md:text-sm">
          STAY CONNECTED!
        </span>
        <ul className="flex items-center justify-center space-x-2 md:space-x-3 lg:space-x-1">
          {Icons.map((item) => (
            <li key={item.name} className="p-1">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                {React.cloneElement(item.icon, {
                  className:
                    "h-6 w-6 transition-transform duration-500 ease-in-out hover:scale-110",
                })}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

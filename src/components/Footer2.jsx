import React from "react";
import { Icons } from "../assets/icons/react-icons/icons";

export const Footer2 = () => {
  return (
    <footer className="w-full bg-yellow-500 py-4">
      {/* Contenedor */}
      <div className="container mx-auto flex items-center justify-center gap-10">
        <p className="text-sm leading-none font-extrabold text-[#7E5232] md:text-lg">
          STAY{" "}
          <span className="block w-full text-sm md:text-lg">CONNECTED!</span>
        </p>

        <ul className="flex items-center justify-center space-x-1 md:space-x-3 lg:space-x-1">
          {Icons.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.name} className="rounded-full bg-[#7E5232] p-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="text-white"
                >
                  <IconComponent className="h-4 w-4 transition-transform duration-500 ease-in-out hover:scale-110 md:h-5 md:w-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

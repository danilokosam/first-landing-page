import React from "react";
import { Icons } from "../assets/icons/react-icons/icons";

export const Footer2 = () => {
  return (
    <footer className="bg-gradient-to-tl from-white to-[#E0E0E0] py-4">
      {/* Contenedor */}
      <div className="container mx-auto flex items-center justify-center gap-10">
        <p className="text-md leading-none font-extrabold text-[#7E5232] md:text-lg">
          STAY <span className="block w-full">CONNECTED!</span>
        </p>

        <ul className="flex items-center justify-center space-x-2 md:space-x-3 lg:space-x-1">
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
                  <IconComponent className="h-6 w-6 transition-transform duration-500 ease-in-out hover:scale-110" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

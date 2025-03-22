import React from "react";
import { Icons } from "../assets/icons/react-icons/icons";

export const Footer2 = () => {
  return (
    <footer className="bg-[#FAE161] py-6">
      {/* Contenedor */}
      <div className="container mx-auto flex items-center justify-center gap-x-8 space-x-8">
        <p className="text-xl leading-none font-extrabold text-[#7E5232] md:text-2xl">
          STAY <span className="block w-full">CONNECTED!</span>
        </p>

        <ul className="flex items-center justify-center space-x-2 md:space-x-3 lg:space-x-1">
          {Icons.map((item) => (
            <li key={item.name} className="rounded-full bg-[#7E5232] p-2">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="text-white"
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

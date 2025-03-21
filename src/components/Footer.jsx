import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { SnapchatIcon } from "../assets/icons/SnapchatIcon";
import { WhatsAppIcon } from "../assets/icons/WhatsAppIcon";
import { XIcon } from "../assets/icons/XIcon";

export const Footer = () => {
  return (
    <footer className="bg-amber-400 py-6 text-black">
      {/* Contenedor */}
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <span className="text-xs font-bold select-none md:text-sm">
          STAY CONNECTED!
        </span>
        <ul className="flex items-center justify-center space-x-2 md:space-x-3">
          {/* Facebook */}
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon
                width="2em"
                height="2m"
                className="h-6 w-6 transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </a>
          </li>

          {/* X */}
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <XIcon
                width="1.5em"
                height="1.5m"
                className="h-6 w-6 transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </a>
          </li>

          {/* Instagram */}
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon
                width="1.6em"
                height="1.6m"
                className="h-6 w-6 transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </a>
          </li>

          {/* WhatsApp */}
          <li>
            <a
              href="https://whatsApp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon
                width="1.6em"
                height="1.6m"
                className="h-6 w-6 transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </a>
          </li>

          {/* Snapchat */}
          <li>
            <a
              href="https://snapchat.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="snapchat"
            >
              <SnapchatIcon
                width="1.6em"
                height="1.6m"
                className="h-6 w-6 transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

import { Outlet } from "react-router";
import { Carousel } from "../components/Carousel";
import { FlavorFull } from "../components/FlavorFull";
import { Navbar } from "../components/Navbar";

export const MainLayout = () => {
  return (
    <div>
      {/* Navigation */}
      <Navbar />
      <FlavorFull />
      <Carousel />
      <Outlet />
      {/* Footer */}
      <footer>© 2025 My Awesome Landing Page</footer>
    </div>
  );
};

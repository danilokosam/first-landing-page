import { Outlet } from "react-router";
import { FlavorFull } from "../components/FlavorFull";
import { Navbar } from "../components/Navbar";

export const MainLayout = () => {
  return (
    <div className="">
      {/* Navigation */}
      <Navbar />
      <FlavorFull />
      <Outlet />
      {/* Footer */}
      <footer>© 2025 My Awesome Landing Page</footer>
    </div>
  );
};

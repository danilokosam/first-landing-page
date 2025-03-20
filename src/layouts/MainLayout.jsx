import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export const MainLayout = () => {
  return (
    <div className="mx-auto w-full">
      {/* Navigation */}
      <Navbar />
      <Outlet />
      {/* Footer */}
      <footer>© 2025 My Awesome Landing Page</footer>
    </div>
  );
};

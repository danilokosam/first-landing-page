import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export const MainLayout = () => {
  return (
    <div>
      {/* Navigation */}
      <Navbar />
      <Outlet />
      {/* Footer */}
      <footer>© 2025 My Awesome Landing Page</footer>
    </div>
  );
};

import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-yellow-300">
      {/* Navigation */}
      <Navbar />
      {/* Main content */}
      <Outlet />
      {/* Footer */}
      <footer>© 2025 My Awesome Landing Page</footer>
    </div>
  );
};

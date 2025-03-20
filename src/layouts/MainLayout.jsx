import { Outlet } from "react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const MainLayout = () => {
  return (
    <div className="mx-auto w-full">
      {/* Navigation */}
      <Navbar />
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  );
};

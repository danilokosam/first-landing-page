import { Outlet } from "react-router";
import { Footer2 } from "../components/Footer2";
import { GoTop } from "../components/GoTop";
import { Navbar } from "../components/Navbar";

export const MainLayout = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col">
      {/* Navigation */}
      <Navbar />
      {/* Contenido principal */}
      <div className="flex-1">
        <Outlet />
      </div>
      {/* Footer */}
      <GoTop />
      <Footer2 />
    </div>
  );
};

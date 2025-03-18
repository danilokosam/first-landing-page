import React from "react";
import { Route, Routes } from "react-router";
import { ROUTES } from "../constants/routes";
import { MainLayout } from "../layouts/MainLayout.jsx";
import { HomePage } from "../pages/HomePage.jsx";
import { NotFoundPage } from "../pages/NotFoundPage.jsx";
import { getRouteComponent } from "../utils/routeUtils.jsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {ROUTES.filter((route) => route.path !== "/").map((route) => (
          <Route
            key={route.name}
            path={route.path.substring(1)}
            element={getRouteComponent(route.name)}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

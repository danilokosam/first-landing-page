import React from "react";
import { Route, Routes } from "react-router";
import { MainLayout } from "../layouts/MainLayout.jsx";
import { AboutPage } from "../pages/AboutPage.jsx";
import { ContactPage } from "../pages/ContactPage.jsx";
import { HomePage } from "../pages/HomePage.jsx";
import { NotFoundPage } from "../pages/NotFoundPage.jsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

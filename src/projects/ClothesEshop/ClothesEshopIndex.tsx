import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./src/components/Navbar/Navbar";
import MainLayout from "./src/layouts/MainLayout";
import Footer from "./src/components/Footer/Footer";

export default function ClothesEshopIndex() {
  return (
    <div className="bg-white w-full min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

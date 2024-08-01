import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./src/components/Navbar/Navbar";
import "./src/assets/styles/style.css";
import Footer from "./src/components/Footer/Footers";

const CookingTogetherIndex = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default CookingTogetherIndex;

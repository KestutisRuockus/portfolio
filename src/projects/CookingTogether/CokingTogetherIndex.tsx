import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./src/components/Navbar/Navbar";
import "./src/assets/styles/style.css";

const CookingTogetherIndex = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
      <div>Footer</div>
    </div>
  );
};

export default CookingTogetherIndex;

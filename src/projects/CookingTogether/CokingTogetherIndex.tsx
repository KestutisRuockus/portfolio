import React from "react";
import { Outlet } from "react-router-dom";
import "./src/assets/styles/style.css";

const CookingTogetherIndex = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default CookingTogetherIndex;

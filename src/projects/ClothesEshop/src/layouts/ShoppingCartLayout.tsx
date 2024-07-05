import React from "react";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import { Outlet } from "react-router-dom";

export default function ShoppingCartLayout() {
  return (
    <div className="bg-slate-100 w-full">
      <Outlet />
    </div>
  );
}

import React from "react";
import { allItems } from "./src/data/database";
import Navbar from "./src/components/Navbar/Navbar";
import BrandAdvertisement from "./src/components/BrandAdvertisement/BrandAdvertisement";
import "./src/assets/styles/style.css";

export default function ClothesEshopIndex() {
  console.log(allItems);

  let num: number = 12;
  num = 25;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <BrandAdvertisement />
    </div>
  );
}

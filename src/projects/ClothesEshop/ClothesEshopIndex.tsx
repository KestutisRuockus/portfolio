import React from "react";
import { allItems } from "./src/data/products";
import { brands } from "./src/data/brandImagesForSlides";
import Navbar from "./src/components/Navbar/Navbar";
import BrandAdvertisement from "./src/components/BrandAdvertisement/BrandAdvertisement";
import "./src/assets/styles/style.css";
import SlidesShow from "./src/utils/SlidesShow";

export default function ClothesEshopIndex() {
  // console.log(brands);

  let num: number = 12;
  num = 25;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <BrandAdvertisement />
      <SlidesShow brands={brands} />
    </div>
  );
}

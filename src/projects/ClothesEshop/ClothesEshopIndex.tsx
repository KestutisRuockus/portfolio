import React from "react";
import { brands } from "./src/data/brandImagesForSlides";
import Navbar from "./src/components/Navbar/Navbar";
import BrandAdvertisement from "./src/components/BrandAdvertisement/BrandAdvertisement";
import "./src/assets/styles/style.css";
import SlidesShow from "./src/utils/SlidesShow";
import Feedback from "./src/components/Feedback/Feedback";
import "./src/assets/styles/style.css";
import LatestNews from "./src/components/latestNews/LatestNews";
import Footer from "./src/components/Footer/Footer";

export default function ClothesEshopIndex() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <BrandAdvertisement />
      <SlidesShow brands={brands} />
      <LatestNews />
      <Feedback />
      <Footer />
    </div>
  );
}

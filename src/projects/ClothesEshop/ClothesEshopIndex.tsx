import React from "react";
import Navbar from "./src/components/Navbar/Navbar";
import BrandAdvertisement from "./src/components/BrandAdvertisement/BrandAdvertisement";
import "./src/assets/styles/style.css";
import Feedback from "./src/components/Feedback/Feedback";
import "./src/assets/styles/style.css";
import LatestNews from "./src/components/latestNews/LatestNews";
import Footer from "./src/components/Footer/Footer";
import BrandLogosSlider from "./src/components/BrandLogosSlider/BrandLogosSlider";
import Collections from "./src/components/Collections/Collections";

export default function ClothesEshopIndex() {
  window.scrollTo(0, 0);
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <BrandAdvertisement />
      <Collections />
      <BrandLogosSlider />
      <LatestNews />
      <Feedback />
      <Footer />
    </div>
  );
}

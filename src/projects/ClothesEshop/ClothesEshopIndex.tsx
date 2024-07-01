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
import { allItems } from "./src/data/products";
import ProductModal from "./src/components/Product/ProductModal";
import CurrentSelectedCollection from "./src/components/CurrentCollection/CurrentSelectedCollection";
import BestSeller from "./src/components/BestSeller/BestSellers";

export default function ClothesEshopIndex() {
  const testProductCard = [
    allItems[0],
    allItems[65],
    allItems[89],
    allItems[114],
  ];
  window.scrollTo(0, 0);
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <BrandAdvertisement />
      <BestSeller />
      <Collections />
      <BrandLogosSlider />
      <LatestNews />
      <Feedback />
      <Footer />
      {/* for testing components */}
      <div className="text-center my-12 text-4xl text-red-600">
        {`Everything below the footer is used for testing! Thank you for your
        understanding. ;)`}
      </div>
      {/* <CurrentSelectedCollection /> */}
      <div className="text-center my-4 text-4xl">
        Current Selected Collection component
      </div>
      <CurrentSelectedCollection products={testProductCard} />
      {/* <ProductModal /> */}
      <div className="text-center my-4 text-4xl">ProductModal component</div>
      <ProductModal product={testProductCard[1]} />
    </div>
  );
}

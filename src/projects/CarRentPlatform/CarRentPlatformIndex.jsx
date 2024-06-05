import Footer from "./src/components/Footer/Footer";
import Header from "./src/components/Header/Header";
import Main from "./src/components/Main/Main";
import Navbar from "./src/components/Navbar/Navbar";
import CarModal from "./src/components/Car/CarModal";
import { CarRentPlatformContext } from "./src/components/Utils/CarRentPlatformContext";
import { useState } from "react";
import allCars from "./data.js";

export default function CarRentPlatformIndex() {
  window.scrollTo(0, 0);

  const carsList = allCars;
  console.log(carsList);

  const [list, setList] = useState([carsList]);
  return (
    <CarRentPlatformContext.Provider value={{ list, setList }}>
      <div className="bg-white min-h-screen w-full flex flex-col">
        <Navbar />
        {/* <CarModal /> */}
        <Header />
        <Main />
        <Footer />
      </div>
    </CarRentPlatformContext.Provider>
  );
}

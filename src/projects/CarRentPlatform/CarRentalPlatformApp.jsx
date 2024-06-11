import { useState } from "react";
import allCars from "./src/data/data.js";
import { CarRentPlatformContext } from "./src/context/CarRentPlatformContext.jsx";
import Home from "./src/pages/Home/Home.jsx";

export default function CarRentalPlatformApp() {
  window.scrollTo(0, 0);

  const carsList = allCars;

  const [list, setList] = useState([carsList]);
  return (
    <CarRentPlatformContext.Provider value={{ list, setList }}>
      <Home />
    </CarRentPlatformContext.Provider>
  );
}

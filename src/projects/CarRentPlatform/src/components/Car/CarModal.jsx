import PricesList from "../Prices/PricesList";
import CarEquipment from "./CarEquipment";
import CarInfo from "./CarInfo";
import vwPassat from "../../../assets/img/vw-passat/vw-passat.jpg";
import vwPassatDashboard from "../../../assets/img/vw-passat/vw-passat-dashboard.jpg";
import vwPassatTrunk from "../../../assets/img/vw-passat/vw-passat-trunk.jpg";
import { useState } from "react";

export default function CarModal() {
  const periods = [
    {
      days: "1-2",
      price: "**",
    },
    {
      days: "3-5",
      price: "**",
    },
    {
      days: "6-8",
      price: "**",
    },
    {
      days: "9-14",
      price: "**",
    },
    {
      days: "15-29",
      price: "**",
    },
    {
      days: "30-365",
      price: "**",
    },
    {
      days: "Deposit",
      price: "**",
    },
  ];

  const features = {
    fuelType: "Gasoline",
    fuelConsumption: "5-6l/100km",
    gearbox: "Automatic",
    doors: "5 doors",
    seats: "5 seats",
    bags: "3 bags",
  };

  const equipment = [
    "ABS",
    "Electric windows",
    "Air conditioning",
    "Stereo sound system",
    "Central Locking",
    "Cruise control",
    "Airbag",
    "Power steering",
  ];

  const images = [vwPassat, vwPassatDashboard, vwPassatTrunk];
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-8 w-full m-auto">
      <div>
        <img
          src={currentImage}
          alt="vw passat"
          className="sm:w-[640px] w-[380px] sm:h-[400px] h-[220px] object-contain"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <img
            onClick={() => setCurrentImage(images[index])}
            className="cursor-pointer border-2 p-1 rounded-md hover:scale-110 transition-all duration-300 bg-cover"
            key={index}
            src={image}
            width={60}
            height={60}
            alt="tmdb-project-image"
          />
        ))}
      </div>
      <div className="flex lg:flex-row flex-col lg:ga-0 gap-6 justify-center items-center w-3/5 lg:ml-[10%]">
        <CarEquipment equipment={equipment} />
        <CarInfo features={features} />
      </div>
      <div className="flex text-center">
        <PricesList periods={periods} />
      </div>
    </div>
  );
}

import PricesList from "../Prices/PricesList";
import CarEquipment from "./CarEquipment";
import CarFeatures from "./CarFeatures";
import { useContext, useState } from "react";
import { CarRentPlatformContext } from "../Utils/CarRentPlatformContext";

export default function CarModal() {
  const context = useContext(CarRentPlatformContext);

  const images = context.list[0][0].photos;
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
        <CarEquipment equipment={context.list[0][0].equipment} />
        <CarFeatures features={context.list[0][0].features} />
      </div>
      <div className="flex text-center">
        <PricesList periods={context.list[0][0].periods} />
      </div>
    </div>
  );
}

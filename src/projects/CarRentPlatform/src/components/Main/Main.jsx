import CarCard from "../Car/CarCard";
import { useContext } from "react";
import { CarRentPlatformContext } from "../Utils/CarRentPlatformContext";

export default function Main() {
  const context = useContext(CarRentPlatformContext);
  const carList = context.list[0];

  return (
    <div className="flex justify-center gap-6 flex-wrap md:p-20 max-[400px]:p-4 p-10">
      {carList.map((car, index) => (
        <CarCard key={index} list={car} />
      ))}
    </div>
  );
}

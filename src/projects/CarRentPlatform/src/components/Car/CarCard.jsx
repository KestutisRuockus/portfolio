import Button from "../Utils/Button";
import CarFeatures from "./CarFeatures";

export default function CarCard({ list }) {
  return (
    <div className="flex sm:flex-row flex-col justify-center items-center h-1/2 p-2 border-2 border-slate-200 rounded-xl">
      <div className="sm:w-1/2 w-full">
        <img
          className="sm:w-96 w-full m-auto "
          src={list.photos[0]}
          alt={list.carModel}
        />
      </div>
      <div className="sm:w-1/2 w-full flex flex-col sm:justify-between sm:items-start items-center gap-2 p-2">
        <div className="w-full font-bold text-lg text-center">
          {list.carModel}
        </div>
        <CarFeatures features={list.features} />
        <div className="w-full text-center">
          Price from{" "}
          <strong className="text-[#21B14C]">
            {list.periods[5].price} Eur / day
          </strong>
        </div>
        <Button text="Reserve" />
      </div>
    </div>
  );
}

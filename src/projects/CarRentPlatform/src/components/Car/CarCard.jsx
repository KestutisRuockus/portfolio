import vwPassat from "../../../assets/img/vw-passat/vw-passat.jpg";
import Button from "../Utils/Button";
import CarInfo from "./CarInfo";

export default function CarCard() {
  const car = {
    carModel: "VW Passat",
    features: {
      fuelType: "Gasoline",
      fuelConsumption: "5-6l/100km",
      gearbox: "Automatic",
      doors: "5 doors",
      seats: "5 seats",
      bags: "3 bags",
    },
    periods: [
      {
        days: "1-2",
        price: "20",
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
    ],
  };

  return (
    <div className="flex sm:flex-row flex-col justify-center items-center h-1/2 p-2 border-2 border-slate-200 rounded-xl">
      <div className="sm:w-1/2 w-full">
        <img
          className="sm:w-96 w-full m-auto "
          src={vwPassat}
          alt="vw-passat"
        />
      </div>
      <div className="sm:w-1/2 w-full flex flex-col sm:justify-between sm:items-start items-center gap-2  p-2">
        <div className="font-bold text-lg">{car.carModel}</div>
        <CarInfo features={car.features} />
        <div>
          Price from{" "}
          <strong className="text-[#21B14C]">
            {car.periods[0].price} Eur / day
          </strong>
        </div>
        <Button text="Reserve" />
      </div>
    </div>
  );
}

import vwPassat from "../../../assets/img/vw-passat/vw-passat.jpg";
import PricesList from "./PricesList";

export default function CarPrices() {
  const carsList = [
    {
      model: "VW Passat",
      img: vwPassat,
      gearbox: "Automatic",
      periods: [
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
      ],
    },
  ];

  return (
    <div className="w-full flex justify-center p-2">
      {carsList.map((car) => {
        return (
          <div
            key={car.model}
            className="rounded-xl flex sm:flex-row flex-col gap-5 justify-between items-center border-2 border-[#21B14C] p-4"
          >
            <div className="flex justify-center items-center h-[128px] lg:pl-0 sm:pl-9 pl-0">
              <img
                className="w-48 h-24 rounded-l-xl"
                src={car.img}
                alt={car.model}
              />
              <div className="flex flex-col justify-center border-x-2 border-[#21B14C] h-full px-4">
                <span className="text-[#21B14C] font-bold hover:underline transition-all duration-300 cursor-pointer">
                  {car.model}
                </span>
                <span>GearBox:</span>
                <span>{car.gearbox}</span>
              </div>
            </div>
            <PricesList periods={car.periods} />
          </div>
        );
      })}
    </div>
  );
}

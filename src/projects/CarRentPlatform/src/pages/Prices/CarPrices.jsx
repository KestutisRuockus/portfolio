import PricesList from "./PricesList";

export default function CarPrices({ list }) {
  return (
    <div className="w-full flex justify-center p-2">
      <div
        key={list.carModel}
        className="rounded-xl flex sm:flex-row flex-col gap-5 justify-between items-center border-2 border-[#21B14C] p-4"
      >
        <div className="flex justify-center items-center h-[128px] lg:pl-0 sm:pl-9 pl-0">
          <img
            className="w-48 h-24 rounded-l-xl"
            src={list.photos[0]}
            alt={list.carModel}
          />
          <div className="flex flex-col justify-center border-x-2 border-[#21B14C] h-full px-4">
            <span className="text-[#21B14C] font-bold hover:underline transition-all duration-300 cursor-pointer">
              {list.carModel}
            </span>
            <span>GearBox:</span>
            <span>{list.features.gearbox}</span>
          </div>
        </div>
        <PricesList periods={list.periods} />
      </div>
    </div>
  );
}

export default function CarInfo({ features }) {
  return (
    <div className="flex gap-4 justify-center items-center w-full min-w-[280px]">
      <div className="flex gap-2 flex-col w-fit">
        <div className="flex gap-3 items-center">
          <i className="fa-solid fa-gas-pump w-4"></i>
          <span className="text-[0.8rem]">{features.fuelType}</span>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fa-solid fa-droplet  w-4"></i>
          <span className="text-[0.8rem]">{features.fuelConsumption}</span>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fa-solid fa-gears w-4"></i>
          <span className="text-[0.8rem]">{features.gearbox}</span>
        </div>
      </div>
      <div className="flex gap-2 flex-col w-fit">
        <div className="flex gap-3 items-center">
          <i className="fa-solid fa-clipboard w-4"></i>
          <span className="text-[0.8rem]">{features.doors}</span>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fa-solid fa-user  w-4"></i>
          <span className="text-[0.8rem]">{features.seats}</span>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fa-solid fa-suitcase w-4"></i>
          <span className="text-[0.8rem]">{features.bags}</span>
        </div>
      </div>
    </div>
  );
}

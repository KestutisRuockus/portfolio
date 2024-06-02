import vwPassat from "../../../assets/img/vw-passat/vw-passat.jpg";
import Button from "../Utils/Button";

export default function CarCard() {
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
        <div className="font-bold text-lg">VW Passat</div>
        <div className="flex items-center sm:flex-row flex-col w-full">
          <div className="flex gap-2 flex-col w-1/2">
            <div className="flex gap-3 items-center">
              <i className="fa-solid fa-gas-pump w-4"></i>
              <span className="text-[0.8rem]">Gasoline</span>
            </div>
            <div className="flex gap-3 items-center">
              <i className="fa-solid fa-droplet  w-4"></i>
              <span className="text-[0.8rem]">5-6l/100km</span>
            </div>
            <div className="flex gap-3 items-center">
              <i className="fa-solid fa-gears w-4"></i>
              <span className="text-[0.8rem]">Automatic</span>
            </div>
          </div>
          <div className="flex gap-2 flex-col w-1/2">
            <div className="flex gap-3 items-center">
              <i className="fa-solid fa-clipboard w-4"></i>
              <span className="text-[0.8rem]">5 doors</span>
            </div>
            <div className="flex gap-3 items-center">
              <i className="fa-solid fa-user  w-4"></i>
              <span className="text-[0.8rem]">5 seats</span>
            </div>
            <div className="flex gap-3 items-center">
              <i className="fa-solid fa-suitcase w-4"></i>
              <span className="text-[0.8rem]">3 bags</span>
            </div>
          </div>
        </div>
        <div>
          Price from <strong className="text-[#21B14C]">** Eur / day</strong>
        </div>
        <Button text="Reserve" />
      </div>
    </div>
  );
}

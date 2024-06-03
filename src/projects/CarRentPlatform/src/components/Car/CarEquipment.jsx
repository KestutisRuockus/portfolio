export default function CarEquipment({ equipment }) {
  return (
    <div className="flex flex-wrap sm:flex-row flex-col items-center w-full">
      {equipment.map((item) => (
        <div key={item} className="flex gap-2 items-center w-1/2 m-auto ">
          <i className="fa-regular fa-circle-check text-[#21B14C]"></i>
          <span className="text-[0.8rem] text-nowrap">{item}</span>
        </div>
      ))}
    </div>
  );
}

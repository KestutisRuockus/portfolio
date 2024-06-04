export default function CarEquipment({ equipment }) {
  return (
    <div className="flex gap-3 flex-wrap lg:justify-start justify-center min-w-[300px]">
      {equipment.map((item) => (
        <div key={item} className="flex gap-1 items-center justify-start w-2/5">
          <i className="fa-regular fa-circle-check text-[#21B14C]"></i>
          <span className="text-[0.8rem] text-nowrap">{item}</span>
        </div>
      ))}
    </div>
  );
}

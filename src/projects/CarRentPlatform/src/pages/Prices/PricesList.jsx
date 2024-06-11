export default function PricesList({ periods }) {
  return (
    <div>
      <div className="sm:pl-8 pl-0 text-[#21B14C] text-center sm:text-start">
        PERIOD (DAYS)
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center ml-8 mr-4 p-4 text-center border-2 border-slate-200 rounded-xl">
        {periods.map((period) => (
          <div key={period.days}>
            <div className="my-2 font-bold text-sm">{period.days}</div>
            <div className="text-sm">{period.price}EUR</div>
          </div>
        ))}
      </div>
    </div>
  );
}

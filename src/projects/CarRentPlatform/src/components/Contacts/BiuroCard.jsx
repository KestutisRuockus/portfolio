export default function Contacts({ biuro }) {
  return (
    <div className="bg-white p-8 min-w-[250px] h-fit border-2 border-slate-200 rounded-lg">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold mb-2">{biuro.city}</h3>
        <div>
          <p>
            <strong className="text-[#21B14C] cursor-pointer underline hover:text-black hover:no-underline  transition-all duration-200">
              {biuro.address}
            </strong>
          </p>
        </div>
        <div>
          <span className="font-medium">Phone Number:</span>
          <p>
            <strong className="text-[#21B14C] cursor-pointer underline hover:text-black hover:no-underline  transition-all duration-200">
              {biuro.phoneNumber}
            </strong>
          </p>
        </div>
        <div>
          <span className="font-medium">Email:</span>
          <p>
            <strong className="text-[#21B14C] cursor-pointer underline hover:text-black hover:no-underline transition-all duration-200">
              {biuro.email}
            </strong>
          </p>
        </div>
        <div>
          <span className="font-medium">Working hours:</span>
          <p>I-V {biuro.workingHours.businessDays}</p>
          <p>VI-VII {biuro.workingHours.weekendDays}</p>
        </div>
      </div>
    </div>
  );
}

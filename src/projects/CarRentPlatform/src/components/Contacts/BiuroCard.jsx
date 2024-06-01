export default function Contacts() {
  return (
    <div className="bg-white p-8 min-w-[250px] border-2 border-slate-200 rounded-lg">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold mb-2">Kaunas</h3>
        <div>
          <p>
            <strong className="text-[#21B14C] cursor-pointer underline hover:text-black hover:no-underline  transition-all duration-200">
              Address, Kaunas, Lithuania
            </strong>
          </p>
        </div>
        <div>
          <span className="font-medium">Phone Number:</span>
          <p>
            <strong className="text-[#21B14C] cursor-pointer underline hover:text-black hover:no-underline  transition-all duration-200">
              +000000000
            </strong>
          </p>
        </div>
        <div>
          <span className="font-medium">Email:</span>
          <p>
            <strong className="text-[#21B14C] cursor-pointer underline hover:text-black hover:no-underline transition-all duration-200">
              ***.***@*****.com
            </strong>
          </p>
        </div>
        <div>
          <span className="font-medium">Working hours:</span>
          <p>I-V 08:00 - 20:00h</p>
          <p>VI-VII 08:00 - 18:00h</p>
        </div>
      </div>
    </div>
  );
}

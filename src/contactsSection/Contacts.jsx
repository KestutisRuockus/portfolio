export default function Contacts() {
  return (
    <div
      className="text-white text-md flex flex-wrap justify-start md:justify-center gap-6 bg-sky-950 bg-opacity-70 w-4/5 mt-14 px-5 py-14 rounded-md
     shadow-xl shadow-cyan-500/50 font-bold relative"
    >
      <div className="absolute left-4 top-4 text-sky-700 text-lg underline underline-offset-1 cursor-default">
        Contacts
      </div>

      <div className="flex gap-2 max-[640px]:w-full">
        <h3 className="text-slate-400">Email:</h3>
        <span className="cursor-pointer hover:text-slate-300 break-text max-[640px]:w-3/5">
          kestutisruockus@gmail.com
        </span>
      </div>
      <div className="flex gap-2 max-[640px]:w-full">
        <h3 className="text-slate-400">Phone Number:</h3>
        <span>+37068120493</span>
      </div>

      <div className="flex gap-2 max-[640px]:w-full">
        <h3 className="text-slate-400">GitHub:</h3>
        <span className="cursor-pointer hover:text-slate-300 break-text max-[640px]:w-3/5">
          https://github.com/KestutisRuockus
        </span>
      </div>
      <div className="flex gap-2 max-[640px]:w-full">
        <h3 className="text-slate-400">LinkedIn:</h3>
        <span className="cursor-pointer hover:text-slate-300 break-text max-[640px]:w-3/5">
          https://www.linkedin.com/in/k%C4%99stutis-ruo%C4%8Dkus-1a74251ab/
        </span>
      </div>
      <div className="flex gap-2 max-[640px]:w-full">
        <h3 className="text-slate-400">Location:</h3>
        <span>Kaunas, Lithuania</span>
      </div>
    </div>
  );
}

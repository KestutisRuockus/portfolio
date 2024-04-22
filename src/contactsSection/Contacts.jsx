export default function Contacts() {
  return (
    <div
      className="text-white text-md flex flex-wrap justify-start md:justify-center gap-6 bg-sky-950 w-4/5 mt-14 px-5 py-8 rounded-md
     shadow-xl shadow-cyan-500/50 font-bold mb-20 relative"
    >
      <div className="absolute left-4 top-4 text-sky-700 text-lg underline underline-offset-1 cursor-default">
        Contacts
      </div>

      <div className="flex gap-2">
        <h3 className="text-slate-400">Email:</h3>
        <span className="cursor-pointer hover:text-slate-300">
          kestutisruockus@gmail.com
        </span>
      </div>
      <div className="flex gap-2">
        <h3 className="text-slate-400">Phone Number:</h3>
        <span>+37068120493</span>
      </div>

      <div className="flex gap-2">
        <h3 className="text-slate-400">GitHub:</h3>
        <span className="cursor-pointer hover:text-slate-300">
          https://github.com/KestutisRuockus
        </span>
      </div>
      <div className="flex gap-2">
        <h3 className="text-slate-400">LinkedIn:</h3>
        <span className="cursor-pointer hover:text-slate-300">
          https://www.linkedin.com/in/k%C4%99stutis-ruo%C4%8Dkus-1a74251ab/
        </span>
      </div>
      <div className="flex gap-2">
        <h3 className="text-slate-400">Location:</h3>
        <span>Kaunas, Lithuania</span>
      </div>
    </div>
  );
}

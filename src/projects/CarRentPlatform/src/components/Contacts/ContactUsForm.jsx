export default function ContactUsForm() {
  return (
    <div className=" w-full p-12 max-[500px]:p-6 border-2 border-slate-200 rounded-lg">
      <div className="flex flex-col gap-4 justify-center">
        <label className="text-lg text-[#21B14C]">Contact Us</label>
        <input
          className="border-2 border-slate-200 rounded-lg p-2"
          type="text"
          placeholder="Name*"
        />
        <input
          className="border-2 border-slate-200 rounded-lg p-2"
          type="text"
          placeholder="Email*"
        />
        <input
          className="border-2 border-slate-200 rounded-lg p-2"
          type="text"
          placeholder="Phone number*"
        />
        <textarea
          className="border-2 border-slate-200 rounded-lg p-2 h-[120px]"
          placeholder="Your comment/question"
        ></textarea>
        <button className="px-6 py-2 bg-[#21B14C] text-white text-xl foint-bold rounded-bl-3xl rounded-tr-3xl  cursor-pointer hover:bg-[#6cff5f] hover:text-black transition-all duration-500">
          Send
        </button>
      </div>
    </div>
  );
}

export default function QuestionAndAnswer({ item }) {
  return (
    <div className="w-3/5 flex flex-col items-center  rounded-2xl">
      <div className="bg-[#21B14C] w-full p-4 ps-12 rounded-t-xl text-white font-semibold">
        {item.question}
      </div>
      <div className="bg-slate-100 border-2 border-slate-200 w-full p-4 ps-12 rounded-b-xl">
        {item.answer}
      </div>
    </div>
  );
}

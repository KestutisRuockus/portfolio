export default function QuestionAndAnswer({ item }) {
  return (
    <div className="lg:w-3/5 sm:w-4/5 w-11/12 flex flex-col items-center  rounded-2xl">
      <div className="bg-[#21B14C] w-full p-4 sm:ps-12 ps-6 rounded-t-xl text-white font-semibold">
        {item.question}
      </div>
      <div className="bg-slate-100 border-2 border-slate-200 w-full p-4 sm:ps-12 ps-6 rounded-b-xl">
        {item.answer}
      </div>
    </div>
  );
}

export default function Button({ text }) {
  return (
    <button className="px-6 py-1 bg-[#21B14C] text-white text-xl foint-bold rounded-bl-3xl rounded-tr-3xl  cursor-pointer hover:bg-[#6cff5f] hover:text-black transition-all duration-500">
      {text}
    </button>
  );
}

import Developer from "./Developer";
import Navbar from "./Navbar";

export default function About() {
  return (
    <div className="bg-slate-800 w-4/5 mt-20 p-8 rounded-md shadow-xl shadow-[#615545] bg-opacity-50">
      <Navbar />
      <Developer />
    </div>
  );
}

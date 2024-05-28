import Developer from "./Developer";
import Navbar from "./Navbar";

export default function About() {
  return (
    <div className="bg-sky-950 w-4/5 mt-20 p-8 rounded-md shadow-xl shadow-cyan-500/50 bg-opacity-70">
      <Navbar />
      <Developer />
    </div>
  );
}

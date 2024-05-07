import Navbar from "./src/Navbar";
import Pagination from "./src/Pagination";

export default function TmdbIndex() {
  return (
    <div className="bg-[#0d253f] w-full text-white">
      <Navbar />
      <Pagination />
    </div>
  );
}

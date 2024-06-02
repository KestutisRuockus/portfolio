import Navbar from "../Navbar/Navbar";
import CarPrices from "./CarPrices";
import Footer from "../Footer/Footer";

export default function AllCars() {
  return (
    <div className="min-h-screen bg-white flex flex-col gap-4">
      <Navbar />
      <CarPrices />
      <CarPrices />
      <CarPrices />
      <Footer />
    </div>
  );
}

import CarCard from "../../components/Car/CarCard";
import { useContext } from "react";
import { CarRentPlatformContext } from "../../context/CarRentPlatformContext";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const context = useContext(CarRentPlatformContext);
  const carList = context.list[0];

  return (
    <div className="bg-white min-h-screen w-full flex flex-col">
      <Navbar />
      <Header />
      <div className="flex justify-center gap-6 flex-wrap md:p-20 max-[400px]:p-4 p-10">
        {carList.map((car, index) => (
          <CarCard key={index} list={car} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

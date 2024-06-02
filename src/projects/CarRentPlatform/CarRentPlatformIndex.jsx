import CarModal from "./src/components/Car/CarModal";
import Footer from "./src/components/Footer/Footer";
import Header from "./src/components/Header/Header";
import Main from "./src/components/Main/Main";
import Navbar from "./src/components/Navbar/Navbar";

export default function CarRentPlatformIndex() {
  // when browsers back btn clicked loads main portfolio page
  // {
  //   window.addEventListener(
  //     "popstate",
  //     () => (window.location.href = "http://localhost:5173/portfolio/")
  //   );
  // }

  return (
    <div className="bg-white min-h-screen w-full flex flex-col">
      <Navbar />
      <CarModal />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

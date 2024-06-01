import Footer from "./src/footer/Footer";
import Header from "./src/header/Header";
import Main from "./src/main/Main";
import Navbar from "./src/navbar/Navbar";

export default function CarRentPlatformIndex() {
  {
    window.addEventListener(
      "popstate",
      () => (window.location.href = "http://localhost:5173/portfolio/")
    );
  }
  return (
    <div className="bg-white min-h-screen w-full flex flex-col">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

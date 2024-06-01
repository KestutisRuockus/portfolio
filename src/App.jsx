import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import TmdbIndex from "./projects/TMDB/TmdbIndex";
import DoctorCareIndex from "./projects/DoctorCare/DoctorCareIndex";
import CarRentPlatformIndex from "./projects/CarRentPlatform/CarRentPlatformIndex";
import AllCars from "./projects/CarRentPlatform/src/components/Cars/AllCars";
import FAQ from "./projects/CarRentPlatform/src/components/FAQ/FAQ";
import AboutUs from "./projects/CarRentPlatform/src/components/AboutUs/AboutUs";
import Contacts from "./projects/CarRentPlatform/src/components/Contacts/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="tmdb-project" element={<TmdbIndex />} />
        <Route path="doctorcare" element={<DoctorCareIndex />} />
        <Route path="carrentplatform" element={<CarRentPlatformIndex />} />
        <Route path="carrentplatform/allcars" element={<AllCars />} />
        <Route path="carrentplatform/faq" element={<FAQ />} />
        <Route path="carrentplatform/aboutus" element={<AboutUs />} />
        <Route path="carrentplatform/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import TmdbIndex from "./projects/TMDB/TmdbIndex";
import DoctorCareIndex from "./projects/DoctorCare/DoctorCareIndex";
import Prices from "./projects/CarRentPlatform/src/pages/Prices/Prices";
import FAQ from "./projects/CarRentPlatform/src/pages/FAQ/FAQ";
import AboutUs from "./projects/CarRentPlatform/src/pages/AboutUs/AboutUs";
import Contacts from "./projects/CarRentPlatform/src/pages/Contacts/Contacts";
import CarRentalPlatformApp from "./projects/CarRentPlatform/CarRentalPlatformApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="tmdb-project" element={<TmdbIndex />} />
        <Route path="doctorcare" element={<DoctorCareIndex />} />
        <Route path="carrentplatform" element={<CarRentalPlatformApp />} />
        <Route path="carrentplatform/prices" element={<Prices />} />
        <Route path="carrentplatform/faq" element={<FAQ />} />
        <Route path="carrentplatform/aboutus" element={<AboutUs />} />
        <Route path="carrentplatform/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

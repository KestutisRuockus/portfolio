import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import TmdbIndex from "./projects/TMDB/TmdbIndex";
import DoctorCareIndex from "./projects/DoctorCare/DoctorCareIndex";
import CarRentPlatformIndex from "./projects/CarRentPlatform/CarRentPlatformIndex";
import AllCars from "./projects/CarRentPlatform/src/components/AllCars";
import DUK from "./projects/CarRentPlatform/src/components/DUK";
import AboutUs from "./projects/CarRentPlatform/src/components/AboutUs";
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
        <Route path="carrentplatform/duk" element={<DUK />} />
        <Route path="carrentplatform/aboutus" element={<AboutUs />} />
        <Route path="carrentplatform/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

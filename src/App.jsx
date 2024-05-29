import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import TmdbIndex from "./projects/TMDB/TmdbIndex";
import DoctorCareIndex from "./projects/DoctorCare/DoctorCareIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="tmdb-project" element={<TmdbIndex />} />
        <Route path="doctorcare" element={<DoctorCareIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

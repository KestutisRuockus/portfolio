import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import TmdbIndex from "./projects/TMDB/TmdbIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="tmdb-project" element={<TmdbIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Content from "./src/Content";
import FilterElements from "./src/FilterElements";
import Navbar from "./src/Navbar";
import Pagination from "./src/Pagination";
import { useState } from "react";
import { TmdbContext } from "./src/TmdbContext";

export default function TmdbIndex() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [listUrl, setListUrl] = useState("movie/upcoming");
  const [filters, setFilters] = useState({
    search: "",
    genre: "all",
    sort: "popular-desc",
  });

  return (
    <TmdbContext.Provider
      value={{
        page,
        setPage,
        totalPages,
        setTotalPages,
        moviesList,
        setMoviesList,
        filters,
        setFilters,
        listUrl,
        setListUrl,
      }}
    >
      <div className="bg-[#0d253f] w-full text-white">
        <Navbar />
        <FilterElements />
        <Content />
        <Pagination />
      </div>
    </TmdbContext.Provider>
  );
}

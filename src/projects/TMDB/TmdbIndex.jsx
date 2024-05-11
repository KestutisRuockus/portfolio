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
  const [listUrl, setListUrl] = useState("movie/popular?");
  const [listTitle, setListTitle] = useState("popular movies");
  const [filters, setFilters] = useState({
    search: "",
    genre: "all",
  });
  const [open, setOpen] = useState(true);

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
        setListTitle,
        open,
        setOpen,
      }}
    >
      <div className="bg-[#0d253f] w-full text-white">
        <Navbar />
        <FilterElements />
        <div className="flex justify-center m-8 text-7xl text-teal-500 font-bold tracking-widest uppercase">
          <h1>{listTitle}</h1>
        </div>
        <Content />
        <Pagination />
      </div>
    </TmdbContext.Provider>
  );
}

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
  const [open, setOpen] = useState(false);
  const [movieInfoForModalWindow, setMovieInfoForModalWindow] = useState({
    posterPath: "",
    title: "",
    rating: 0,
    overview: "",
    genre: [],
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
        setListTitle,
        open,
        setOpen,
        movieInfoForModalWindow,
        setMovieInfoForModalWindow,
      }}
    >
      <div className="bg-[#0d253f] w-full text-white">
        <Navbar />
        <FilterElements />
        <div className="flex justify-center m-8 sm:text-7xl text-4xl text-center text-teal-500 font-bold tracking-widest uppercase">
          <h1>{listTitle}</h1>
        </div>
        <Content />
        <Pagination />
      </div>
    </TmdbContext.Provider>
  );
}

import { useContext } from "react";
import { TmdbContext } from "./TmdbContext";

export default function FilterElements() {
  const moviesGenries = [
    { id: "all", genre: "Clear Genre filter" },
    { id: "28", genre: "Action" },
    { id: "12", genre: "Adventure" },
    { id: "16", genre: "Animation" },
    { id: "35", genre: "Comedy" },
    { id: "80", genre: "Crime" },
    { id: "99", genre: "Documentary" },
    { id: "18", genre: "Drama" },
    { id: "10751", genre: "Family" },
    { id: "14", genre: "Fantasy" },
    { id: "36", genre: "History" },
    { id: "27", genre: "Horror" },
    { id: "10402", genre: "Music" },
    { id: "9648", genre: "Mystery" },
    { id: "10749", genre: "Romance" },
    { id: "878", genre: "Science Fiction" },
    { id: "10770", genre: "TV Movie" },
    { id: "53", genre: "Thriller" },
    { id: "10752", genre: "War" },
    { id: "37", genre: "Western" },
  ];

  const context = useContext(TmdbContext);

  function getMoviesByGenre(e) {
    const filteredListTitle = moviesGenries.filter(
      (genre) => genre.id === e.target.value
    );

    context.setPage(1);
    context.setListTitle(
      e.target.value === "all"
        ? "popular movies"
        : `${filteredListTitle[0].genre} movies`
    );
    context.setFilters({
      genre: e.target.value,
    });
    context.setListUrl(
      e.target.value === "all"
        ? "movie/upcoming?"
        : `discover/movie?${import.meta.env.REACT_API_KEY}&with_genres=${
            e.target.value
          }&`
    );
  }

  function searchText(e) {
    context.setFilters({ search: e.target.value });
  }

  return (
    <div className=" flex gap-2 flex-wrap justify-center items-center p-4">
      {/* Search elements */}
      <div className="flex items-center">
        <input
          value={context.filters.search}
          onChange={searchText}
          className="px-2 mr-2 rounded-md border-4 border-teal-500 text-[#0d253f] font-semibold focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <button
          onClick={() => {
            context.setPage(1);
            context.setListTitle(`'${context.filters.search}' results`);
            context.setListUrl(`search/movie?query=${context.filters.search}&`);
            context.setFilters({ search: "" });
          }}
          className="text-[#0d253f] font-bold rounded-md bg-white px-4 border-4 border-teal-500 hover:bg-sky-950 hover:text-white transition-all duration-300"
        >
          Search
        </button>
      </div>
      {/* Select genre element */}
      <div>
        <select
          onChange={getMoviesByGenre}
          className="text-[#0d253f] font-bold rounded-md bg-white px-2 border-4 border-teal-500 hover:bg-sky-950 hover:text-white focus:outline-none transition-all duration-300"
        >
          {moviesGenries.map((genre) => (
            <option
              onChange={getMoviesByGenre}
              key={`genre: ${genre.id}`}
              value={genre.id}
            >
              {genre.genre}
            </option>
          ))}
        </select>
      </div>
      {/* Sort elements */}
      <div>
        <select className="text-[#0d253f] font-bold rounded-md bg-white px-2 border-4 border-teal-500 hover:bg-sky-950 hover:text-white focus:outline-none transition-all duration-300">
          <option value="popular-desc">Most Popular</option>
          <option value="popular-asc">Least Popular</option>
          <option value="rating-asc">Rating Ascending</option>
          <option value="rating-desc">Rating Descending</option>
          <option value="release-asc">Release Date Ascending</option>
          <option value="release-desc">Release Date Descending</option>
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
        </select>
      </div>
    </div>
  );
}

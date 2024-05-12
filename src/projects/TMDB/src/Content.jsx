import { useEffect, useContext, useState } from "react";
import MovieCard from "./MovieCard";
import { TmdbContext } from "./TmdbContext";
import Modal from "./Modal";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWUzMmVlNTM2Y2JiMTg5MDJhYjUyNDkxMzFmNGU3ZiIsInN1YiI6IjYyZDcyMTQ2NmJlYWVhMDA0YzM1NjI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gICniYLTW8OBAczVNLw7ATkeVoZTL7ivc73FQDuJzhg",
  },
};

export default function Content() {
  const context = useContext(TmdbContext);
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${context.listUrl}page=${context.page}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        context.setMoviesList(data.results);
        context.setTotalPages(data.total_pages);
      })
      .catch((err) => console.error(err));
  }, [context.page, context.listUrl, context.filters.genre]);

  useEffect(() => {
    setFilteredMoviesList(context.moviesList);
  }, [context.filters.search, context.moviesList]);

  return (
    <div className="flex flex-wrap justify-center items-center m-auto my-8 py-8 gap-8 w-4/5 bg-emerald-700 rounded-md relative">
      {filteredMoviesList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <Modal onClose={() => context.setOpen(false)} />
    </div>
  );
}

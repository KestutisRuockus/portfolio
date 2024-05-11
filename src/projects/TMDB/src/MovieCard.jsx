import { useContext } from "react";
import noImage from "../assets/no-image-1.svg";
import { TmdbContext } from "./TmdbContext";

export default function MovieCard(movie) {
  const context = useContext(TmdbContext);

  return (
    <div
      onClick={() => context.setOpen(true)}
      id={movie.movie.id}
      className="flex flex-col bg-gradient-to-r from-cyan-500 to-teal-500 w-44 h-80 rounded-xl cursor-pointer hover:opacity-80 transition-all duration-300"
    >
      <div className="bg-slate-200 h-2/3 rounded-xl">
        <img
          className="w-full h-full rounded-t-lg"
          src={
            movie.movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/w500/${movie.movie.poster_path}`
              : noImage
          }
          alt="movie cover"
        />
      </div>
      <div className="h-1/3 flex flex-col gap-2 justify-center pl-3 rounded-xl">
        <h1 className="text-lg font-bold text-black max-h-16 overflow-hidden leading-4">
          {movie.movie.title}
        </h1>
        <p className="text-slate-600 font-meidum">{movie.movie.release_date}</p>
      </div>
    </div>
  );
}

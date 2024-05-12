import { useContext } from "react";
import noImage from "../assets/no-image-1.svg";
import { TmdbContext } from "./TmdbContext";

export default function Modal({ onClose, children }) {
  const context = useContext(TmdbContext);
  let genriesStr = context.movieInfoForModalWindow.genre.join(", ");

  return (
    <div
      onClick={onClose}
      className={`overflow-y-auto w-4/5 h-full fixed top-0 m-auto  bg-contain bg-center bg-no-repeat z-10 ${
        context.open ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full md:h-full h-fit md:px-8 md:py-0 py-12 flex flex-col md:flex-row justify-center items-center gap-12 relative bg-black/90"
      >
        <div className="absolute max-[500px]:top-4 max-[500px]:right-4 top-8 right-12">
          <i
            onClick={onClose}
            className="fa-regular fa-rectangle-xmark text-white text-4xl cursor-pointer hover:text-teal-500 transition-colors duration-300"
          ></i>
        </div>
        {/* poster */}
        <div className="w-1/2 max-w-[300px] md:1/3 border-8 border-yellow-600">
          <img
            className="w-full bg-gray-300"
            src={
              context.movieInfoForModalWindow.posterPath !== null
                ? `https://image.tmdb.org/t/p/w500/${context.movieInfoForModalWindow.posterPath}`
                : noImage
            }
            alt="movie-poster"
          />
        </div>
        {/* info */}
        <div className="flex flex-col gap-8 w-3/5 md:2/5">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center justify-start items-start md:gap-0 gap-8">
            {/* title/genries */}
            <div>
              <h1 className="text-3xl font-bold">
                {context.movieInfoForModalWindow.title}
              </h1>
              <p className="text-sm text-teal-500 font-semibold">
                Genres: {genriesStr}
              </p>
            </div>
            {/* rating */}
            <div className="text-xl font-bold text-orange-500">
              {+context.movieInfoForModalWindow.rating}
            </div>
          </div>
          {/* overview */}
          <div>{context.movieInfoForModalWindow.overview}</div>
        </div>
        {children}
      </div>
    </div>
  );
}

import { useContext } from "react";
import noImage from "../assets/no-image-1.svg";
import { TmdbContext } from "./TmdbContext";

export default function Modal({ onClose, children }) {
  const context = useContext(TmdbContext);

  return (
    <div
      onClick={onClose}
      className={`w-4/5 h-full fixed top-0 m-auto  bg-contain bg-center bg-no-repeat z-10 ${
        context.open ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-full md:px-8 flex flex-col md:flex-row justify-center items-center gap-12 relative bg-black/90"
      >
        <div className="absolute top-8 right-12">
          <i
            onClick={onClose}
            className="fa-regular fa-rectangle-xmark text-white text-4xl cursor-pointer hover:text-teal-500 transition-colors duration-300"
          ></i>
        </div>
        {/* poster */}
        <div className="w-1/2 max-w-[300px] md:1/3 border-8 border-yellow-600">
          <img
            className="w-full bg-gray-300"
            src={noImage}
            alt="movie-poster"
          />
        </div>
        {/* info */}
        <div className="flex flex-col gap-8 w-3/5 md:2/5">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center justify-start items-start md:gap-0 gap-8">
            {/* title */}
            <div>
              <h1 className="text-3xl">Title</h1>
              <p>genre, genre, genre</p>
            </div>
            {/* rating */}
            <div>rating</div>
          </div>
          {/* overview */}
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum alias
            recusandae repudiandae minima ea temporibus et in dolorum eligendi
            velit, architecto laudantium, vel aut quo doloremque! Dignissimos,
            exercitationem architecto. Sit?
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

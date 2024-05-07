import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full lg:w-4/5 flex md:justify-around items-center md:pl-0 pl-8 p-2 first-letter: m-auto box-border relative">
      <div className="bg-white rounded-full p-4">
        <img
          className="w-16 h-16 bg-white"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt="TMDB logo"
        />
      </div>
      <ul
        className={`md:w-auto w-3/5 flex flex-col md:flex-row max-md:absolute right-0 ${
          open ? "right-[0]" : "top-[-275px]"
        }  top-0 justify-center items-center text-center gap-12 text-2xl font-bold max-md:bg-teal-900 py-8 px-2 rounded-bl-3xl transition-all duration-500`}
      >
        <li className="cursor-pointer hover:scale-125  hover:text-teal-500 transition-all duration-300">
          Home
        </li>
        <li className="cursor-pointer hover:scale-125  hover:text-teal-500 transition-all duration-300">
          Trending
        </li>
        <li className="cursor-pointer hover:scale-125  hover:text-teal-500 transition-all duration-300">
          Upcoming
        </li>
      </ul>

      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute md:hidden max-[400px]:right-4 top-4 right-8 z-40 "
      >
        {open ? (
          <i className="fa-regular fa-rectangle-xmark text-white cursor-pointer"></i>
        ) : (
          <i className="fa-solid fa-bars text-white cursor-pointer"></i>
        )}
      </div>
    </nav>
  );
}
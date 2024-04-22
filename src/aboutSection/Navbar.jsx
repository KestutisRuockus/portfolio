import SquareAnimation from "../sqaureAnimation/SquareAnimation";
import { useState } from "react";

export default function Navbar() {
  let Links = [
    { name: "About", link: "/" },
    { name: "Portfolio", link: "/" },
    { name: "Contacts", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav className="text-white flex justify-between relative">
      <div className="flex items-center">
        <SquareAnimation />
        <h3 className="ml-8 cursor-default">Kęstutis Ruočkus</h3>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute sm:hidden max-[400px]:right-0 right-2 z-40 "
      >
        {open ? (
          <i className="fa-regular fa-rectangle-xmark text-sky-950 cursor-pointer"></i>
        ) : (
          <i className="fa-solid fa-bars text-white cursor-pointer"></i>
        )}
      </div>
      <ul
        className={`flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 sm:items-center absolute sm:static sm:bg-sky-950 bg-white
         sm:text-white text-sky-950 sm:z-auto z-[30] left-[55%] w-1/2 max-[400px]:w-[45%] sm:h-auto h-[180px] sm:w-auto sm:pl-0 pl-6 
         max-[400px]:ml-3 transition-all duration-500 ease-in font-bold ${
           open ? "top-0" : "top-[-490px]"
         }`}
      >
        {/* ${open ? "top-20" : "top-[-490px]"} */}
        {Links.map((link) => (
          <li
            className="hover:text-yellow-300 duration-300 sm:hover:scale-125 hover:scale-110 cursor-pointer text-start"
            key={link.name}
          >
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

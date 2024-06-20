import React, { useState } from "react";
import logo from "../../assets/images/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false); // state used to set or navbar is open or closed on small screens/pages

  // automatically rendered links with map method
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Men",
      link: "/",
    },
    {
      name: "Women",
      link: "/",
    },
    {
      name: "Kids",
      link: "/",
    },
  ];

  return (
    <nav className="flex item-center md:justify-between justify-end p-4 bg-[#FECA5A] relative">
      <div
        onClick={() => setOpen(!open)}
        className="absolute md:hidden left-4 top-10 z-40"
      >
        {open ? (
          <i className="fa-regular fa-rectangle-xmark text-white hover:text-rose-700 cursor-pointer text-3xl transition-all duration-200"></i>
        ) : (
          <i className="fa-solid fa-bars text-black hover:text-rose-700 cursor-pointer text-3xl transition-all duration-200"></i>
        )}
      </div>
      <ul
        className={`sm:w-2/3 w-full flex md:flex-row flex-col justify-center items-center lg:gap-12 gap-8 max-md:absolute max-md:z-30 z-0 ${
          open ? "left-0" : "max-md:-left-full z-10"
        } top-0 max-md:py-24 max-md:bg-black max-md:text-white md:pb-0 pb-4 rounded-br-3xl transition-all duration-200 relative`}
      >
        {links.map((link) => (
          <li
            className="text-2xl font-semibold cursor-pointer border-black md:hover:border-b-8 md:hover:-mb-4 transition-all duration-200 rounded-b-lg max-md:hover:text-[#FECA5A]"
            key={link.name}
          >
            {link.name}
          </li>
        ))}
      </ul>
      <div className="flex justify-end md:w-1/2 sm:w-2/3 w-4/5">
        <div className="w-1/2 p-2 cursor-pointer">
          <img className="w-24 h-16 rounded-3xl" src={logo} alt="" />
        </div>
        <div className="flex justify-center items-center search-input w-2/3">
          <input
            className="w-full h-10 sm:px-4 px-2 focus:outline-none focus:bg-rose-100 rounded-s-lg transition-colors duration-200"
            type="text"
            placeholder="Search"
          />
          <i className="fa-solid fa-magnifying-glass p-3 rounded-e-lg text-white bg-black cursor-pointer hover:bg-rose-700 transition-colors duration-200"></i>
        </div>
      </div>
    </nav>
  );
}

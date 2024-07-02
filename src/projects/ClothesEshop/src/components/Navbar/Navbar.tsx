import React, { useState } from "react";
import logo from "../../assets/images/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false); // state used to set or navbar is open or closed on small screens/pages
  const [productsQuantityInShoppingCart, setProductsQuantityInShoppingCart] =
    useState(3); // get and display how many products are in the shopping cart
  const [navOpacity, setNavOpacity] = useState<string>("100"); // set navbar opacity value

  // check if user is scrolling then set opacity value for navbar
  window.onscroll = function () {
    if (window.scrollY > 0) {
      setNavOpacity("50");
    } else {
      setNavOpacity("100");
    }
  };

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
    <nav
      className={`flex item-center md:justify-between justify-end px-2 bg-[#FECA5A] sticky top-0 z-50 opacity-${navOpacity} transition-all duration-300 hover:opacity-100`}
    >
      {/* hamburger element of links */}
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
      {/* ul element of links */}
      <ul
        className={`sm:w-2/3 w-full flex md:flex-row flex-col justify-center items-center lg:gap-12 gap-8 max-md:absolute max-md:z-30 z-0 ${
          open ? "left-0" : "max-md:-left-full z-10"
        } top-0 max-md:py-24 max-md:bg-black max-md:text-white md:pb-0 pb-4 rounded-br-3xl transition-all duration-200 relative`}
      >
        {links.map((link) => (
          <li
            className="font-brandTitle text-3xl font-semibold cursor-pointer border-black md:hover:border-b-8 md:hover:-mb-4 transition-all duration-200 rounded-b-lg max-md:hover:text-[#FECA5A]"
            key={link.name}
          >
            {link.name}
          </li>
        ))}
      </ul>
      {/* logo element */}
      <div className="flex justify-end md:w-1/2 sm:w-2/3 w-2/3">
        <div className="w-1/2 p-2">
          <img
            className="w-24 h-16 rounded-3xl cursor-pointer"
            src={logo}
            alt=""
          />
        </div>
        {/* search element */}
        <div className="flex justify-center items-center search-input w-2/3">
          <input
            className="font-base w-full h-10 sm:px-4 px-2 focus:outline-none focus:bg-rose-100 rounded-s-lg transition-colors duration-200"
            type="text"
            placeholder="Search"
          />
          <i className="fa-solid fa-magnifying-glass p-3 rounded-e-lg text-white bg-black cursor-pointer hover:bg-rose-700 transition-colors duration-200"></i>
        </div>
      </div>
      {/* shopping cart icon */}
      <div className="flex justify-end items-center h-fit m-auto mx-4 relative group">
        <i className="fa-solid fa-cart-shopping text-3xl group-hover:opacity-70 cursor-pointer"></i>
        <div
          className={`flex justify-center items-center w-5 h-5 p-[2px] bg-rose-700 rounded-full absolute right-[-10px] bottom-[-8px] ${
            productsQuantityInShoppingCart === 0
              ? "hidden"
              : "visible cursor-default"
          }`}
        >
          <div className="text-white text-xs">
            {productsQuantityInShoppingCart}
          </div>
        </div>
      </div>
    </nav>
  );
}

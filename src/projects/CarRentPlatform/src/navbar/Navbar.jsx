import { useState } from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    {
      title: "Home",
      url: "/carrentplatform",
    },
    {
      title: "Cars",
      url: "/carrentplatform/allcars",
    },
    {
      title: "D.U.K.",
      url: "/carrentplatform/duk",
    },
    {
      title: "About Us",
      url: "/carrentplatform/aboutus",
    },
    {
      title: "Contacts",
      url: "/carrentplatform/contacts",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-black">
      <div className="w-4/5 m-auto flex justify-between items-center">
        <Logo />
        <ul
          className={`text-white md:w-auto w-3/5 flex flex-col md:flex-row max-md:absolute right-0 top-0 justify-center items-center text-center min-[860px]:gap-12 min-[800px]:gap-10 gap-8 text-2xl font-bol bg-black py-8 px-2 rounded-bl-3xl transition-all duration-500 ${
            open ? "right-[0]" : "top-[-400px]"
          }`}
        >
          {links.map((link) => (
            <li
              className="text-xl hover:text-[#21B14C] hover:underline font-semibold cursor-pointer transition-all duration-200"
              key={link.title}
            >
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute md:hidden max-[400px]:right-1 top-1 right-4 z-40 "
        >
          {open ? (
            <i className="fa-regular fa-rectangle-xmark text-white cursor-pointer"></i>
          ) : (
            <i className="fa-solid fa-bars text-white cursor-pointer"></i>
          )}
        </div>
      </div>
    </div>
  );
}
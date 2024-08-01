import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const links = [
  { name: "Home", link: "/cookingtogether" },
  { name: "Categories", link: "categories" },
  { name: "Cuisines", link: "cuisines" },
  { name: "Favorites", link: "favorites" },
];

type LinkProps = {
  name: string;
  link: string;
};

const createLink = (link: LinkProps) => (
  <NavLink
    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    to={link.link}
    key={link.name}
    className="navlink"
  >
    {link.name}
  </NavLink>
);
const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  return (
    <nav className="cooking-nav">
      <i
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        className="fa-solid fa-bars icon-bars"
      ></i>
      <ul style={{ left: isHamburgerOpen ? "0" : "-110%" }}>
        {links.map((link) => createLink(link))}
      </ul>
      <div className="cooking-nav-input">
        <input type="text" placeholder="Search" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  );
};

export default Navbar;

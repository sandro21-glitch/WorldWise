import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import NavSidebar from "./NavSidebar";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center relative">
      <Link to="/">
        <img src={logo} alt="logo" className="h-7 md:h-12" />
      </Link>
      <ul className="gap-10 hidden md:flex">
        <li className="text-white font-semibold">
          <Link to="/pricing">PRICING</Link>
        </li>
        <li className="text-white font-semibold">
          <Link to="/product">PRODUCT</Link>
        </li>
        <li>
          <Link className="px-4 py-2 rounded-lg font-semibold bg-greenBtn uppercase">
            Login
          </Link>
        </li>
      </ul>
      <button
        className="block md:hidden text-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <MdClose className="text-white text-2xl" />
        ) : (
          <GiHamburgerMenu className="text-white text-2xl" />
        )}
      </button>
      <NavSidebar isOpen={isOpen} />
    </nav>
  );
};

export default Nav;

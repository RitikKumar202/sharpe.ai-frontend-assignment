import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import logo from "../assets/logo.webp";

// Define NavBar component
const NavBar = () => {
  // Declare an array of navigation links
  let Links = [
    { name: "HOME", link: "/" },
    { name: "TRANSACTION", link: "/transaction" },
    { name: "DATA PAGE", link: "/data" },
  ];

  // Declare a state variable to track nav visibility for smaller screen
  let [navIsVisible, setNavIsVisible] = useState(false);

  // Defined a function to handle nav visibility toggle
  const navVisibilityHandler = () => {
    setNavIsVisible((currState) => {
      return !currState;
    });
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-pink-600 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
          <img src={logo} alt="SHARPE>AI" className="w-[35px]" />
          <span className="ml-2">SHARPE.AI</span>
        </div>

        <div className="text-3xl absolute right-8 top-5 text-white cursor-pointer md:hidden">
          {navIsVisible ? (
            <MdClose onClick={navVisibilityHandler} />
          ) : (
            <MdMenu onClick={navVisibilityHandler} />
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-[10px] absolute md:static bg-pink-600 md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            navIsVisible ? "top-[69px] " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-white hover:text-pink-300 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

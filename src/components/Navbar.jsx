import { useState } from "react";
import React from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className="relative z-10">
      <div className="flex items-center gap-20">
        <div
          className="relative lg:hidden w-fit grid grid-rows-3 gap-[5px] ml-7 cursor-pointer mt-5"
          onClick={openNav}
        >
          <span className="h-1 w-7 rounded-xl bg-gray-500"></span>
          <span className="h-1 w-7 rounded-xl bg-gray-500"></span>
          <span className="h-1 w-7 rounded-xl bg-gray-500"></span>
        </div>
      </div>
      {/* Side nav bar */}
      <div
        className={
          isOpen
            ? "absolute left-0 top-0 h-[100vh] xs:w-[100vw] sm:w-[60%] md:w-[50%] lg:hidden bg-white transition-all duration-1000"
            : "absolute left-[-250rem] top-0 h-[100vh] xs:w-[100vw] bg-white transition-all duration-500"
        }
      >
        <div className="w-[100%] mb-7">
          <span
            className="float-right mt-5 mr-10 cursor-pointer text-2xl text-gray-500 w-fit h-fit"
            onClick={closeNav}
          >
            X
          </span>
        </div>
        <div className="w-[100%]">
          <div className="mt-14 mb-7">
          <img src="/images/logo.png" alt="logo" className="w-[200px] mx-auto"/>
          </div>
          <ul className="grid text-center w-[100%]">
            <Link to="/" onClick={closeNav}>
              <li className="hover:bg-blue-500 p-2 hover:rounded-lg uppercase hover:text-white">
                Accueil
              </li>
            </Link>
            <Link to="about" onClick={closeNav}>
              <li className="hover:bg-blue-500 p-2 hover:rounded-lg uppercase hover:text-white">
                à propos
              </li>
            </Link>
            <Link to="indh" onClick={closeNav}>
              <li className="hover:bg-blue-500 p-2 hover:rounded-lg uppercase hover:text-white">
                indh
              </li>
            </Link>
            <Link to="events" onClick={closeNav}>
              <li className="hover:bg-blue-500 p-2 hover:rounded-lg uppercase hover:text-white">
                Events
              </li>
            </Link>
            <Link to="faq" onClick={closeNav}>
              <li className="hover:bg-blue-500 p-2 hover:rounded-lg uppercase hover:text-white">
                faq
              </li>
            </Link>
            <Link to="contact" onClick={closeNav}>
              <li className="hover:bg-blue-500 p-2 hover:rounded-lg uppercase hover:text-white">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex bg-white container w-11/12 mx-auto justify-between items-center px-8 py-2 rounded-b-2xl shadow-lg shadow-dark-800">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" className="w-[124px]"/>
          </Link>
          <ul className="flex space-x-[2vw]">
            <li>
              <NavLink to="/" className="text-[#040650] uppercase font-medium hover:text-[#313877]">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="about" className="text-[#040650] uppercase font-medium hover:text-[#313877]">à propos</NavLink>
            </li>
            <li>
              <NavLink to="indh" className="text-[#040650] uppercase font-medium hover:text-[#313877]">indh</NavLink>
            </li>
            <li>
              <NavLink to="events" className="text-[#040650] uppercase font-medium hover:text-[#313877]">Events</NavLink>
            </li>
            <li>
              <NavLink to="faq" className="text-[#040650] uppercase font-medium hover:text-[#313877]">faq</NavLink>
            </li>
            <li>
              <NavLink to="contact" className="text-[#040650] uppercase font-medium hover:text-[#313877]">Contact</NavLink>
            </li>
          </ul>
      </div>
    </nav>
  );
};

import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="flex items-center gap-20 mt-5">
        <div
          className="relative lg:hidden w-fit grid grid-rows-3 gap-[5px] ml-7 cursor-pointer"
          onClick={() => {
            setIsOpen(true);
          }}
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
            ? "absolute left-0 top-0 h-[100%] xs:w-[100%] sm:w-[60%] md:w-[50%] lg:hidden bg-white transition-all duration-1000"
            : "absolute left-[-250rem] top-0 h-[100%] xs:w-[100%] bg-white transition-all duration-500"
        }
      >
        <div className="w-[100%] mb-7">
          <span
            className="float-right mt-5 mr-10 cursor-pointer text-2xl text-gray-500 w-fit h-fit"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            X
          </span>
        </div>
        <div className="w-[100%]">
          <div className="mt-14 mb-7">
            <img src="/images/Logo.svg" className="m-auto" alt="logo" />
          </div>
          <ul className="grid text-center w-[100%]">
            <Link to="/">
              <li clLinkssNLinkme="hover:bg-blue-500 p-2 hover:rounded-lg capitalize hover:text-white">
                Accueil
              </li>
            </Link>
            <Link to="about">
              <li className="hover:bg-blue-500 p-2 hover:rounded-lg capitalize hover:text-white">
                à propos
              </li>
            </Link>
            <Link to="#">
              <li className="hover:bg-blue-500 p-2 hover:rounded-lg capitalize hover:text-white">
                Events
              </li>
            </Link>
            <Link to="#">
              <li className="hover:bg-blue-500 p-2 hover:rounded-lg capitalize hover:text-white">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-around gap-52 3xl:gap-1">
        <img src="/images/Logo.svg" alt="logo" />
          <ul className="flex gap-10">
            <li>
              <Link to="/" className="text-[#040650] uppercase font-medium">Accueil</Link>
            </li>
            <li>
              <Link to="about" className="text-[#040650] uppercase font-medium">à propos</Link>
            </li>
            <li>
              <Link to="#" className="text-[#040650] uppercase font-medium">Events</Link>
            </li>
            <li>
              <Link to="#" className="text-[#040650] uppercase font-medium">Contact</Link>
            </li>
          </ul>
      </div>
    </nav>
  );
};

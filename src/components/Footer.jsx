import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="relative bottom-0 h-fit w-full">
      <div className="border border-[#C8C8C8] w-[80%] mx-auto rounded-full mt-24"></div>
      <div className="flex items-center justify-center flex-col lg:flex-row gap-y-[3vh] gap-x-[2vw] mt-10">
        <img src="images/indh.png" alt="indh" className="w-[350px]" />
        <img src="/images/logo.png" alt="logo" className="w-[200px]" />
      </div>
      <div className="flex flex-col lg:flex-row mx-auto lg:items-start gap-6 lg:justify-evenly w-80 lg:w-full mt-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-[#040650]">
              Plateforme des jeunes
            </h1>
          </div>
          <p className="text-[#5F5F5F] w-80">
            Avec dévouement, cultivons vos aspirations vers la réussite.
            Ensemble, avançons main dans la main vers un avenir prometteur et
            inspirant.
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-[#040650]">Shortcuts</h1>
          <ul className="flex flex-col gap-2 uppercase">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="about">À propos</Link>
            </li>
            <li>
              <Link to="indh">Indh</Link>
            </li>
            <li>
              <Link to="events">Events</Link>
            </li>
            <li>
              <Link to="faq">faq</Link>
            </li>
            <li>
              <Link to="contact">Contactez-Nous</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-5 lg:gap-y-10">
          <Socials />
          <a href="annexes.pdf" className="font-bold uppercase text-[#040650] hover:text-[#1e1f88]" download>
            Téléchargez les annexes
          </a>
        </div>
      </div>
      <p className="bg-[#0C3F8A] text-white text-sm px-2 py-4 text-center mt-5">
        Copyright &copy; {year} pfjoa.ma • All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

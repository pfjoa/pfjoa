import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <div className="flex flex-col lg:flex-row mx-auto lg:items-center gap-6 lg:justify-evenly w-80 lg:w-full mt-24">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="images/footerLogo.svg" alt="logo" className="w-12" />
            <h1 className="text-lg font-bold text-[#040650]">
              Plateforme des jeunes
            </h1>
          </div>
          <p className="text-[#5F5F5F] w-80">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur.
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-[#040650]">Shortcuts</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="about">À propos</Link>
            </li>
            <li>
              <Link to="">Events</Link>
            </li>
            <li>
              <Link to="">Contactez-Nous</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[#040650]">Suivez-nous</h1>
          <div className="flex gap-2">
            <Link
              to="https://www.facebook.com/profile.php?id=100064845486341"
              target="_blank"
            >
              <img src="images/facebook.svg" alt="facebook" className="w-10" />
            </Link>
            <img src="images/instagram.svg" alt="instagram" className="w-10" />
            <img src="images/linkedin.svg" alt="linkedin" className="w-10" />
            <img src="images/twitter.svg" alt="twitter" className="w-10" />
          </div>
        </div>
      </div>
      <p className="bg-[#0C3F8A] text-white text-sm px-2 py-4 text-center mt-5">
        Copyright &copy; {year} pfjoa.ma • All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

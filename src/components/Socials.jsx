import React from "react";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-[#040650]">Suivez-nous</h1>
      <div className="flex gap-2">
        <Link
          to="https://www.facebook.com/profile.php?id=100064845486341"
          target="_blank"
        >
          <img src="images/facebook.svg" alt="facebook" className="w-10" />
        </Link>
        <Link
          to="https://www.instagram.com/plateformedesjeunesoujdaangad"
          target="_blank"
        >
          <img src="images/instagram.svg" alt="instagram" className="w-10" />
        </Link>
        <Link
          to="https://www.linkedin.com/company/plateforme-des-jeunes-oujda-angad"
          target="_blank"
        >
          <img src="images/linkedin.svg" alt="linkedin" className="w-10" />
        </Link>
        <Link
          to="https://twitter.com/PfjOujdaAngad"
          target="_blank"
        >
          <img src="images/twitter.svg" alt="twitter" className="w-10" />
        </Link>
      </div>
    </div>
  );
};

export default Socials;

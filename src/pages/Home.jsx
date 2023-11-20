import React from "react";
import { CardObjectifs } from "../components/Card-objectif";
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";

export const Home = () => {
  const objectifCardInfo = [
    {
      image: "/images/bureau.svg",
      imageAlt: "bureau",
      title: "Accueil et réception",
      desc: "La plateforme des jeunes oujda-angad vous accueillera avec bras ouverts",
    },
    {
      image: "/images/ear.svg",
      imageAlt: "ear",
      title: "Ecouter et guider",
      desc: "Nous écouterons vos idées et vous guiderons jusqu'à ce que tout ce dont vous avez besoin soit prêt",
    },
    {
      image: "/images/person.svg",
      imageAlt: "Formation des jeunes",
      title: "Formation des jeunes",
      desc: "Tout au long du processus, il y aura des choses que vous ne savez peut-être pas, nous vous formerons sur tout ce que vous ne savez pas.",
    },
  ];
  // About and events info array
  const AboutEvents = [
    {
      image: "images/AboutPic.png",
      title: "à propos",
      titleAbout: "Nous commençons par découvrir vos idées",
      aboutDesc:
        "Vous présentez vos idées et nous discuterons des détails essentiels comme ce dont vous auriez besoin, les équipements et les choses nécessaires pour rassembler votre dossier.",
    },
    {
      image: "images/meeting-office.svg",
      title: "Events",
      titleEvents: "Les événements pédagogiques font partie du programme",
      EventsDesc:
        "Nous organisons des événements éducatifs pour les propriétaires d'entreprises, couvrant le marketing, les finances, le leadership, et l'innovation. Restez à jour sur les tendances industrielles et connectez-vous pour un soutien et des conseils précieux.",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center lg:flex-row lg:justify-around mt-8">
        <div className="flex flex-col gap-7 h-fit ml-8">
          <h1 className="font-semibold text-4xl lg:text-5xl 3xl:text-7xl 3xl:w-[800px] text-[#040650] w-80 lg:w-96 lg:leading-snug">
            Alimenter Vos Aspirations Commerciales
          </h1>
          <p className="w-80 3xl:w-[800px] 3xl:text-4xl text-[#636C7D]">
            Nous fournissons l'énergie et le soutien pour nourrir vos
            aspirations commerciales, enflammant votre chemin vers le succès et
            la croissance.
          </p>
          <div className="flex items-center gap-2">
            <Button />
            <span>Video player</span>
          </div>
        </div>
        <div>
          <img
            src="images/hero-illustration.svg"
            alt=""
            className="w-[300px] lg:w-[450px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-12 mt-10 py-10">
        <h1 className="uppercase text-[#424686]">notre objectifs</h1>
        <div className="flex flex-col lg:flex-row items-start flex-wrap gap-12 mx-8">
          {objectifCardInfo.map((e) => {
            return (
              <CardObjectifs
                image={e.image}
                imageAlt={e.imageAlt}
                title={e.title}
                desc={e.desc}
              />
            );
          })}
        </div>
      </div>
      <div>
        <img
          src="/images/pacman.svg"
          alt="pacman"
          className="absolute top-[100vh] w-20 opacity-70"
        />
      </div>
      <div className="flex flex-col gap-9 mt-10 px-8 lg:flex-row items-center justify-evenly">
        <h1 className="uppercase text-center font-medium text-[#424686] lg:hidden">
          {AboutEvents[0].title}
        </h1>
        <div className="relative top-10 w-fit">
          <img
            src={AboutEvents[0].image}
            alt="meeting"
            className="z-[1] max-w-[350px]"
          />
          <img
            src="images/dots.svg"
            alt="dots"
            className="absolute w-20 z-[-1] top-[-20px] left-[-25px]"
          />
        </div>
        <div className="w-80 mt-10">
          <Card
            title={AboutEvents[0].title}
            cardTitle={AboutEvents[0].titleAbout}
            cardDesc={AboutEvents[0].aboutDesc}
          />
        </div>
      </div>
      <div className="flex flex-col gap-9 mt-10 px-8 lg:flex-row-reverse items-center justify-evenly">
        <h1 className="uppercase text-center font-medium text-[#424686] lg:hidden">
          {AboutEvents[1].title}
        </h1>
        <div className="relative top-10 w-fit">
          <img
            src={AboutEvents[1].image}
            alt="meeting"
            className="z-[1] max-w-[350px] "
          />
          <img
            src="images/rings.svg"
            alt="rings"
            className="absolute w-full z-[-1] top-[-200px] left-[200px]"
          />
        </div>
        <div className="w-80 mt-10">
          <Card
            title={AboutEvents[1].title}
            cardTitle={AboutEvents[1].titleEvents}
            cardDesc={AboutEvents[1].EventsDesc}
          />
        </div>
      </div>
      <div className="border border-[#C8C8C8] w-[80%] mx-auto rounded-full mt-24"></div>
      <Footer />
    </div>
  );
};

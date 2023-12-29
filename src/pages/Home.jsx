import React from "react";
import { CardObjectifs } from "../components/Card-objectif";
import Button from "../components/Button";
import Card from "../components/Card";
export const Home = () => {
  const objectifCardInfo = [
    {
      image: "/images/bureau.svg",
      imageAlt: "bureau",
      title: "Accueil et Réception",
      desc: "La plateforme des jeunes oujda-angad vous réserve un accueil bienveillant",
    },
    {
      image: "/images/ear.svg",
      imageAlt: "ear",
      title: "Ecouter et Orientation",
      desc: "Un service de proximité pour informer, orienter et accompagner les jeunes",
    },
    {
      image: "/images/person.svg",
      imageAlt: "Formation des jeunes",
      title: "Formation des jeunes",
      desc: "Apprendre et améliorer vos niveaux afin de mieux répondre aux exigences de marché"
    },
  ];
  // About and events info array
  const AboutEvents = [
    {
      image: "images/AboutPic.png",
      title: "à propos",
      titleAbout: "Qu'est-ce que la Plateforme des Jeunes?",
      aboutDesc:
        "La Plateforme des Jeunes Oujda Angad est intégrée au Programme de l'Initiative Nationale pour le Développement Humain. Elle représente un espace dédié à l'essor de l'esprit entrepreneurial chez les jeunes de la préfecture d'Oujda Angad, favorisant également leur employabilité.",
    },
    {
      image: "images/office-meeting.png",
      title: "Events",
      titleEvents: "Les événements pédagogiques font partie du programme",
      EventsDesc:
        "Nous organisons des événements éducatifs pour les propriétaires d'entreprises, couvrant le marketing, les finances, le leadership, et l'innovation. Restez à jour sur les tendances industrielles et connectez-vous pour un soutien et des conseils précieux.",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center xl:flex-row xl:justify-evenly mt-8">
        <div className="flex flex-col gap-7 h-fit ml-8">
          <h1 className="font-semibold text-4xl lg:text-5xl text-[#040650] w-80 lg:w-[500px] lg:leading-snug">
          Accompagner Votre Développement Professionnel
          </h1>
          <p className="w-80 text-[#636C7D] text-start xl:text-justify">
            Nous fournissons le soutien et l'accompagnement des jeunes dans l'objectif d'insertion professionnelle et de leur développement, enflammant votre chemin vers le succès et la croissance.
          </p>
          <div className="flex items-center self-center lg:self-start gap-2">
            <Button href="#apropos" normal="no"/>
          </div>
        </div>
        <div>
          <img
            src="images/hero-illustration.png"
            alt="illustration"
            className="w-[300px] lg:w-[400px]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-12 mt-10 py-10">
        <h1 className="uppercase text-[#424686]">notre services</h1>
        <div className="flex flex-col lg:flex-row justify-center flex-wrap gap-y-16 gap-x-[5vw] mx-8">
          {objectifCardInfo.map((e, index) => {
            return (
              <CardObjectifs
                key={index}
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
      <div className="flex flex-col gap-[9vw] mt-10 px-8 lg:flex-row items-center justify-center" id="apropos">
        <h1 className="uppercase text-center font-medium text-[#424686] lg:hidden">
          {AboutEvents[0].title}
        </h1>
        <div className="relative top-10 w-fit">
          <img
            src={AboutEvents[0].image}
            alt="meeting"
            className="z-[1] max-w-[350px]"
            loading="lazy"
          />
          <img
            src="images/dots.svg"
            alt="dots"
            className="absolute w-20 z-[-1] top-[-20px] left-[-25px]"
          />
        </div>
        <div className="w-[350px] mt-10">
          <Card
            title={AboutEvents[0].title}
            cardTitle={AboutEvents[0].titleAbout}
            cardDesc={AboutEvents[0].aboutDesc}
            aboutOrEvent={"about"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[9vw] mt-10 px-8 lg:flex-row-reverse items-center justify-center mb-16">
        <h1 className="uppercase text-center font-medium text-[#424686] lg:hidden">
          {AboutEvents[1].title}
        </h1>
        <div className="relative top-10 w-fit">
          <img
            src={AboutEvents[1].image}
            alt="meeting"
            className="z-[1] max-w-[350px]"
            loading="lazy"
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
            aboutOrEvent={"events"}
          />
        </div>
      </div>
    </div>
  );
};

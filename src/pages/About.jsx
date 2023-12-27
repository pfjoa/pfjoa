import React, { useState } from "react";
import Vision_Mission from "../components/Vision_Mission";
import Objectif from "../components/Objectif";
import Statistiques from "../components/Statistiques";
import Process from "../components/Process";

const About = () => {
  const imagesObjectif = [
    {
      image: "images/entrepreneuriat.png",
      alt: "entrepreneuriat",
      color: "#F77F00",
      text: "Entrepreunariat",
      deg: "45deg",
    },
    {
      image: "images/employabilité.png",
      alt: "employabilité",
      color: "#0830FF",
      text: "employabilité",
      deg: "90deg",
    },
    {
      image: "images/Amelioration.png",
      alt: "Amelioration",
      color: "#F77F00",
      text: "amélioration de revenue",
      deg: "150deg",
    },
  ];
  const content = {
    visionSmallTitle: "visions",
    visionTitle: "Notre vision",
    visionContent:
      "Nous envisageons une société prospère basée sur le talent, l'innovation et le travail acharné. Notre vision est d'autonomiser les individus en leur fournissant les équipements essentiels, les connaissances et les opportunités nécessaires pour exceller dans leurs rôles et avoir un impact durable sur l'état économique du pays.",
    missionSmallTitle: "mission",
    missionTitle: "notre mission",
    missionContent:
      "Nous engageons à soutenir les jeunes dans leur intégration professionnelle en leur offrant un accompagnement adapté, que ce soit en employabilité ou en entrepreneuriat, pour qu'ils puissent surmonter les obstacles et réussir dans leur parcours. Cela s'inscrit dans notre mission plus large d'insertion par l'activité économique.",
    visionImage: "images/visions.png",
    missionImage: "images/missions.png",
    visionAlt: "vision",
    missionAlt: "mission",
  };
  const statistiques = [
    {
      image: "images/meeting.png",
      alt: "meetingVisitors",
      text: "+5K",
      subText: "visiteurs",
    },
    {
      image: "images/consultation.png",
      alt: "consultation",
      text: "+3.5K",
      subText: "candidats écoutés",
    },
    {
      image: "images/orientation.png",
      alt: "orientation",
      text: "+2K",
      subText: "candidats orientés",
    },
    {
      image: "images/startup.png",
      alt: "CandidatFinance",
      text: "+1k",
      subText: "Candidats financés",
    },
  ];

  const imagesProcess = [
    {
      id: 1,
      img: "images/hearing.png",
      alt: "hearing",
      paragraph: "écoute et orientation du candidat",
      color: "#262740",
    },
    {
      id: 2,
      img: "images/deposit.png",
      alt: "deposit",
      paragraph: "Déposez le dossier de candidature",
      color: "#F77F00",
    },
    {
      id: 3,
      img: "images/cpde.png",
      alt: "cpde",
      paragraph: "évaluation des projets auprés la jury",
      color: "#00489D",
    },
    {
      id: 4,
      img: "images/update-deposit.png",
      alt: "update-deposit",
      paragraph: "Completez votre piéces de candidature",
      color: "#0DCCF5",
    },
    {
      id: 5,
      img: "images/cpdh.png",
      alt: "cpdh",
      paragraph: "Approuver les dossier auprés la jury",
      color: "#FFCC4C",
    },
    {
      id: 6,
      img: "images/success.png",
      alt: "success",
      paragraph: "Acquérir L'appui",
      color: "#A2B969",
    },
  ];
  return (
    <div className="container w-10/12 mx-auto mt-10">
      <div className="flex flex-col items-center space-y-10 justify-around space-x-10 xl:flex-row">
        <div className="flex flex-col gap-3 max-w-[450px] min-w-[250px] text-justify">
          <h1 className="text-[#040650] font-bold uppercase text-2xl">
            À propos de nous
          </h1>
          <p className="text-[#717171]">
            La Plateforme des jeunes d'Oujda-Angad (PFJOA) est un espace qui
            vise à soutenir les jeunes entrepreneurs et à renforcer leurs
            compétences dans le cadre du programme “ Amélioration de revenue et
            inclusion des jeunes ” de l'Initiative nationale pour le
            développement humain (INDH). Ce programme s'inscrit dans le cadre de
            la troisième phase de l'INDH et vise à concrétiser les objectifs du
            programme.
          </p>
          <p className="text-[#717171]">
            La Plateforme des jeunes d'Oujda-Angad propose des ateliers de
            formation pour les jeunes entrepreneurs. Ces ateliers visent à
            orienter et à renforcer les compétences des jeunes, en leur offrant
            des formations et des ressources pour développer leurs entreprises.
          </p>
        </div>
        <div>
          <img
            src="images/banner_about.png"
            alt="banner"
            className="w-[350px] lg:w-[450px]"
          />
        </div>
      </div>
      <Vision_Mission
        visionSmallTitle={content.visionSmallTitle}
        visionTitle={content.visionTitle}
        visionContent={content.visionContent}
        visionImage={content.visionImage}
        missionSmallTitle={content.missionSmallTitle}
        missionTitle={content.missionTitle}
        missionContent={content.missionContent}
        missionImage={content.missionImage}
        missionAlt={content.missionAlt}
        visionAlt={content.visionAlt}
      />
      {/* objectifs */}
      <section className="flex flex-col items-center mt-24 gap-y-24">
        <h1 className="uppercase text-[#424686] font-semibold">
          notre objectifs
        </h1>
        <div className="flex flex-wrap gap-24 justify-center">
          {imagesObjectif.map((img, index) => {
            return (
              <div key={index}>
                <Objectif
                  image={img.image}
                  alt={img.alt}
                  borderColor={img.color}
                  text={img.text}
                  deg={img.deg}
                />
              </div>
            );
          })}
        </div>
      </section>
      {/* statistiques */}
      <section className="relative mt-24 h-fit w-fit mx-auto flex flex-col items-center gap-y-10">
        <h1 className="uppercase text-[#424686] font-semibold 2xl:top-16 block 2xl:absolute z-10">
          Statistiques
        </h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="507"
            viewBox="0 0 1440 507"
            fill="none"
            className="spikyRect hidden 2xl:block z-0"
          >
            <g filter="url(#filter0_d_256_209)">
              <path
                d="M0 65.5583L124.605 118.12L238.157 16L408.484 50.0401L729.042 138.144L1100.85 65.5583L1289.77 118.12L1441 65.5583V441H0V65.5583Z"
                fill="white"
              />
            </g>
          </svg>
          <div className="relative 2xl:absolute top-0 w-full flex flex-col lg:flex-row justify-center items-center h-full gap-y-[6vh] gap-x-[6vw]">
            {statistiques.map((statistique, index) => {
              return (
                <Statistiques
                  key={index}
                  img={statistique.image}
                  alt={statistique.alt}
                  title={statistique.text}
                  subTitle={statistique.subText}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="w-full mt-16">
        <div className="flex flex-col gap-y-16">
          <h1 className="uppercase text-[#424686] font-semibold text-center">
            Démarche de candidature
          </h1>
          <div className="flex flex-col gap-y-2 lg:hidden">
            {imagesProcess.map((e, index) => {
              return (
                <Process
                  key={index}
                  img={e.img}
                  alt={e.alt}
                  paragraph={e.paragraph}
                  color={e.color}
                  display={e.id === 6 ? "hidden" : "block"}
                />
              );
            })}
          </div>
          <div>
            <object
              data="images/process.svg"
              width="100%"
              height="100%"
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

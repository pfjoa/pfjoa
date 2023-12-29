import React from "react";
import Phase from "../components/Phase";
import Programme from "../components/Programme";

const Indh = () => {
  const phases = [
    {
      img: "images/walking_sheep.jpg",
      alt: "walking_sheep",
      title: "phase 1",
      paragraph: `
          La première phase de l'Initiative Nationale pour le Développement
          Humain (INDH) s'est articulée autour de quatre programmes visant
          différentes catégories sociales. La lutte contre pauvreté en milieu
          rural, l'exclusion sociale en milieu urbain et la précarité
          constituent les principaux objectifs assignés à ces programmes.
      `,
      date: "2005 ~ 2010",
    },
    {
      img: "images/people_in_public.png",
      alt: "people_in_public",
      title: "phase 2",
      paragraph: `
        La deuxième phase de l'Initiative nationale pour le développement humain (INDH) visait à relever divers défis. 
        Elle a ciblé 702 communes rurales et 532 quartiers urbains, en se concentrant sur la création d'activités génératrices de revenus, 
        la promotion de l'esprit d'entreprise collectif et l'utilisation des ressources locales.
      `,
      date: "2011 ~ 2015",
      flex: "row-reverse",
    },
    {
      img: "images/robotics.jpg",
      alt: "robotics",
      title: "phase 3",
      paragraph: `
        La phase 3 de l'INDH met l'accent sur le capital humain en tant que levier essentiel du développement, 
        Rattrapage des déficits en infrastructures et services sociaux de base, Accompagnement des personnes en 
        situation de précarité et Amélioration du revenu et inclusion économique des jeunes ainsi Impulsion du 
        capital humain des générations montantes .
      `,
      date: "2019 ~ 2023",
    },
  ];

  const programmes = [
    {
      img: "images/2girls.png",
      alt: "2_girls",
      title: "programme 1",
      paragraph: `Programme 1 vise à combler les lacunes en matière d'infrastructures et de services sociaux de base afin de réduire les inégalités et de créer des opportunités pour tous les individus.`,
      color: "#20223b",
      url : "infrastructures-de-base",
    },
    {
      img: "images/mother.png",
      alt: "mother",
      title: "programme 2",
      paragraph: `Programme 2 vise à fournir une assistance et un soutien aux personnes confrontées à des circonstances difficiles ou vivant dans des conditions vulnérables.`,
      color: "#ff8400",
      url : "lutte-contre-la-precarite",
    },
    {
      img: "images/projet.png",
      alt: "projet",
      title: "programme 3",
      paragraph: `Programme 3 vise à améliorer les revenus et l'inclusion économique des jeunes. 
      Ce programme fait partie de l'objectif plus large de l'INDH de promouvoir le développement du 
      capital humain et de combler les lacunes en matière d'infrastructures et de services sociaux de base.`,
      color: "#20223b",
      url : "inclusion-economique-des-jeunes",
    },
    {
      img: "images/baby.png",
      alt: "baby",
      title: "programme 4",
      paragraph: `Programme 4 se concentre sur l'amélioration de la qualité et de l'accessibilité de l'éducation afin de réduire 
      les déficits socio-économiques et de combler les lacunes en matière d'infrastructures et de services sociaux de base`,
      color: "#ff8400",
      url : "generations-montantes",
    },
  ];
  return (
    <div className="container w-10/12 mx-auto mt-20">
      <main className="flex flex-col items-center xl:items-start gap-y-10 sm:gap-20 xl:gap-y-5">
        <h1 className="text-[#040650] font-bold uppercase w-2/12 text-2xl">
          indh
        </h1>
        <div className="flex flex-col items-center xl:items-start xl:justify-evenly xl:flex-row-reverse gap-y-5">
          <div className="relative">
            <div className="hidden sm:block absolute bg-orange-500 rounded-2xl h-[483px] w-full z-[-1] translate-x-12 -translate-y-12"></div>
            <img
              src="images/roi.png"
              alt="roi"
              className="z-1 rounded-2xl h-[485px] sm:hover:-translate-y-12 sm:hover:translate-x-12 transition-all duration-500"
            />
          </div>
          <div className="flex flex-col gap-y-5 w-12/12 xl:w-8/12 text-center xl:text-justify">
            <p className="text-[#717171] text-sm font-medium w-12/12 xl:w-9/12">
              L'Initiative Nationale du Développement Humain (INDH) est un
              programme lancé par le Roi Mohammed VI, que Dieu L'assiste, en mai
              2005. Son objectif est de lutter contre la pauvreté, l'exclusion
              et la précarité, tant en milieu urbain que rural. Il vise à
              améliorer les conditions de vie des populations les plus
              vulnérables à travers la mise en œuvre de projets de développement
              humain intégrés et concertés. Le programme est financé par le
              budget de l'État, le ministère de l'Intérieur et la coopération
              internationale.
            </p>
            <p className="text-[#717171] text-sm font-medium w-12/12 xl:w-9/12">
              “[…] Par conséquent, j'invite le gouvernement et tous les acteurs
              concernés à entreprendre une restructuration globale et profonde
              des programmes et des politiques nationales d'appui et de
              protection sociale et à soumettre des propositions portant sur
              leurs modalités d'évaluation.[…] Pour garantir un impact direct et
              tangible, j'insiste sue la nécessité de se concentrer sur les
              mesures d'urgence à mettre en œuvre dans les domaines suivants:
              […] […] Deuxièmement: lancer la troisième phase de l'Initiative
              nationale pour le Développement humain, en consolidant ses acquis
              et en rencentrant ses programmes sur le développement du capital
              humain, la promotion de la condition des générations montantes,
              l'appui aux catégories en situation difficile, et en lançant une
              nouvelle génération d'initiatives génératrices de revenus et
              d'emplois.”
            </p>
            <p className="self-end text-sm font-medium xl:self-center w-6/12">
              Extrait du Discours à la Nation prononcé par Sa Majesté le Roi
              Mohammed VI Que Dieu L'Assiste, à l'occasion de la fête du Trône
              le 29 juillet 2018
            </p>
          </div>
        </div>
      </main>
      <section className="flex flex-col items-center gap-y-16 mt-16">
        <h1 className="text-[#040650] font-semibold uppercase text-lg">
          phases
        </h1>
        <div className="flex flex-col gap-y-16 ">
          {phases.map((phase, index) => {
            return (
              <Phase
                key={index}
                img={phase.img}
                alt={phase.alt}
                title={phase.title}
                paragraph={phase.paragraph}
                date={phase.date}
                flex={phase.flex}
              />
            );
          })}
        </div>
      </section>
      <section className="flex flex-col items-center gap-y-10 mt-16">
        <h1 className="text-[#040650] font-semibold uppercase text-lg">
          objectifs
        </h1>
        <div className="flex flex-col 2xl:flex-row gap-x-16 gap-y-10 justify-around">
          <div>
            <img
              src="images/amelioration_indh.png"
              alt="objectifs"
              className="max-w-[350px] 2xl:max-w-[500px] mx-auto"
            />
          </div>
          <p className="max-w-[600px] self-center text-sm text-center xl:text-justify text-[#383838]">
            L'Initiative nationale pour le développement humain (INDH) a
            plusieurs objectifs clés. Elle visait à réduire le déficit social
            dans les zones urbaines et rurales en améliorant l'accès aux
            infrastructures de base et aux services sociaux tels que la santé,
            l'éducation, l'eau et l'électricité. L'initiative visait également à
            promouvoir l'impact social et les indicateurs sociaux, en mettant
            l'accent sur la cohésion sociale et en s'attaquant au déséquilibre
            entre le statut de pays à revenu intermédiaire du Maroc et ses
            indicateurs sociaux. En outre, l'INDH visait à mettre en œuvre une
            méthodologie participative, à impliquer la société civile au niveau
            local et à intégrer tous les agents politiques, économiques et
            sociaux locaux dans un processus unique. 
            <br/>
            <br/>
            Elle visait également à établir une procédure relativement transparente de définition des
            priorités et d'appel d'offres public pour la soumission de projets
            ouverts aux groupes locaux, aux organisations professionnelles, aux
            syndicats, aux coopératives et aux associations en tant qu'agences
            d'exécution. L'initiative a été conçue pour élever le développement
            humain et la croissance économique au rang de priorité absolue dans
            le pays, réduire la pauvreté dans les zones rurales, créer des
            projets de développement économique durable et garantir un meilleur
            accès aux infrastructures de base et aux services sociaux pour les
            communautés marginalisées.
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-y-10 items-center mt-16">
        <h1 className="text-[#040650] font-semibold uppercase text-lg">
          programmes
        </h1>
        <article className="flex flex-col xl:flex-row justify-center flex-wrap gap-y-10 gap-x-10">
          {programmes.map((programme, index) => {
            return (
              <Programme
                key={index}
                img={programme.img}
                alt={programme.alt}
                title={programme.title}
                paragraph={programme.paragraph}
                color={programme.color}
                url={programme.url}
              />
            );
          })}
        </article>
      </section>
    </div>
  );
};

export default Indh;

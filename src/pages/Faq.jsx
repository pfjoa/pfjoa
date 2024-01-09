import React, { useState } from "react";
import Maintenance from "../components/Maintenance";
const Faq = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const data = [
    {
      question: "C'est quoi INDH?",
      answer:
        "L'Initiative Nationale du Développement Humain (INDH) est un programme lancé par le Roi Mohammed VI, que Dieu L'assiste, en mai 2005. Son objectif est de lutter contre la pauvreté, l'exclusion et la précarité, tant en milieu urbain que rural.",
    },
    {
      question: "C'est quoi Programme 3?",
      answer:
        "Programme 3 vise à améliorer les revenus et l'inclusion économique des jeunes.",
    },
    {
      question: "Quelle est la nature de ce financement?",
      answer: "lorem ipsum",
    },
    {
      question: "Comment faire pour avoir un financement pour mon projet?",
      answer: "lorem ipsum",
    },
    {
      question: "Quelles sont les conditions pour postuler?",
      answer:
        "Un jeune âgé de 18 ans jusqu'à 35 ans, et il y a des cas de dérogations jusqu'à 45 ans. Un projet d'une valeur ajoutée.",
    },
    {
      question: "Comment postuler?",
      answer:
        "Durant l'appelle, il faut s'inscrire dans la plateforme des jeunes, et fournir les éléments essentiels de candidature demandés.",
    },
    {
      question: "Quelles sont les pieces necessaires pour postuler?",
      answer: "lorem",
    },
    {
      question: "Les cibles concernées par le programme 3?",
      answer:
        "Les jeunes à la recherche des formations pour objet d'insertion dans le monde d'emploi. Les jeunes entrepreneurs à la recherche d'un financement pour leur entreprenariat dans la création ou l'amélioration de leur propre projet.",
    },
    {
      question: "Est ce qu'il faut avoir un statut juridique avant postuler?",
      answer: "Non, ce n'est pas obligatoire.",
    },
    {
      question:
        "Quelles sont les conditions necessaires pour postuler comme un statut de cooperative?",
      answer: `Une coopérative en activité plus qu'un an.
      Les membres de la coopératives 30% sont des femmes et non familial.
      `,
    },
    {
      question: "quel est le plafond de soutien?",
      answer:
        "Dans le pourcentage de 60%. 100 000.00dh pour les autos entrepreneurs et les sociétés. 300 000.00dh pour les coopératives.",
    },
    {
      question: "que couvrira le financement?",
      answer: "Le soutien vise à financer des équipements fixes.",
    },
    {
      question:
        "est ce qu'il ya la possibilité de financer les projets sans local?",
      answer: "Le soutien exige l'installation physique (local).",
    },
  ];
  const maintenance = true;
  return maintenance ? (
    <Maintenance />
  ) : (
    <main className="container mx-auto w-10/12 mt-16 flex justify-center items-center">
      <div className="flex flex-col gap-y-10">
        <div>
          <h1 className="text-[#040650] font-bold text-4xl lg:w-[450px]">
            FAQ
          </h1>
          <p className="p-2 text-[#696969]">Les question plus fréquentes.</p>
        </div>
        <div className="relative">
          {data.map((element, index) => (
            <div
              key={index}
              className="min-w-[20vw] transition-all ease-out-[cubic(0,0.4,0,0.2)] mb-2 duration-1000 rounded-lg bg-white  px-2 py-4"
            >
              <div
                className="flex justify-between items-center uppercase font-semibold cursor-pointer"
                onClick={() => {
                  toggle(index);
                }}
              >
                <h1 className="text-[#ff8400]">{element.question}</h1>
                <span className="text-[#090b24]">
                  {selected === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={
                  selected === index
                    ? "h-auto max-h-[9999px] transition-all ease-[cubic(0,0.4,0,0.2)] duration-1000"
                    : "overflow-hidden max-h-0 transition-all duration-200"
                }
              >
                <p className="text-[#4e4e4e]">{element.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Faq;

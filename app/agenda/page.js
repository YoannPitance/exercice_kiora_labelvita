"use client";
import { useState } from "react";
import Header from "../components/Header";
import BlocRdv from "../components/BlocRdv";

import "./agenda.scss";

export default function Agenda() {
  const [activeRdvIndex, setActiveRdvIndex] = useState(-1);
  const [isContainerCollapseActive, setIsContainerCollapseActive] =
    useState(false);

  const handleRdvClick = (index) => {
    setActiveRdvIndex((prevIndex) => (prevIndex === index ? -1 : index)); // Activer/désactiver le rdv au clic
    setIsContainerCollapseActive(index !== -1); // Mettre à jour l'état de la div containerCollapse
  };

  const handleButtonClick = (e) => {
    // Empêche l'événement de se propager jusqu'au conteneur du collapse
    e.stopPropagation();
    // Gérer le clic sur le bouton ici (par exemple, afficher une alerte)
    alert("Je suis arrivé chez vous!");
  };

  // données de rendez-vous avec des dates différentes (pourront être appelées depuis l'API et db)
  const rdvs = [
    { date: "15 mai", name: "15 avenue de Meze", hour: "11:00 à 14:00" },
    { date: "15 mai", name: "2 rue du moulin des eaux", hour: "14:00 à 17:00" },
    { date: "15 mai", name: "10 impasse de la Jalade", hour: "17:00 à 18:00" },
    { date: "17 mai", name: "Mme Bénédite", hour: "10:00 à 11:00" },
    { date: "17 mai", name: "Mr Jacob", hour: "11:00 à 14:00" },
    { date: "17 mai", name: "Mlle Edith Larousse", hour: "14:00 à 19:00" },
    { date: "18 mai", name: "M152 rue des mirabeaux", hour: "10:00 à 11:00" },
    { date: "18 mai", name: "Mr Jacob", hour: "11:00 à 14:30" },
    { date: "18 mai", name: "Mr Robert", hour: "14:30 à 15:30" },
  ];

  // regroupement des rendez-vous par date
  const groupedRdvs = rdvs.reduce((acc, rdv) => {
    const date = rdv.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(rdv);
    return acc;
  }, {});

  return (
    <main>
      <header className="headerAgenda">
        <Header
          imageUrl="/userphoto.png"
          title="Bienvenue User"
          iconeSrc="/logochat.png"
          url="/conversations"
          classIcone="iconeAgenda"
        />
      </header>

      <section id="mesRdv">
        <h2>Mes rendez-vous</h2>
        {Object.entries(groupedRdvs).map(([date, rdvs], index) => (
          <BlocRdv
            key={date}
            date={date}
            rdvs={rdvs}
            isActive={index === activeRdvIndex}
            setIsActive={() => handleRdvClick(index)}
          />
        ))}
        <div
          className={`containerCollapse ${
            isContainerCollapseActive ? "containerCollapseActive" : ""
          }`}
        >
          <div className="collapseContent">
            <button className="btn-circle" onClick={handleButtonClick}>
              Signaler mon arrivée
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

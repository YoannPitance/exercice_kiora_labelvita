"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import BlocRdv from "../components/BlocRdv";
import "./agenda.scss";

export default function Agenda() {
  const [activeRdvIndex, setActiveRdvIndex] = useState(-1);

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
    <>
      <Header
        imageUrl="/userphoto.png"
        title="Bienvenue User"
        iconeSrc="/logochat.png"
      />
      <section id="mesRdv">
        <h2>Mes rendez-vous</h2>
        {Object.entries(groupedRdvs).map(([date, rdvs], index) => (
          <BlocRdv
            key={date}
            date={date}
            rdvs={rdvs}
            isActive={index === activeRdvIndex}
            setIsActive={() => setActiveRdvIndex(index)}
          />
        ))}
      </section>
    </>
  );
}

"use client";
import { useState, useEffect } from "react";
import Rdv from "./Rdv";

export default function BlocRdv({ date, rdvs }) {
  const [activeRdvIndex, setActiveRdvIndex] = useState(-1);
  const [isActiveContainer, setIsActiveContainer] = useState(false);

  const handleRdvClick = (index) => {
    setActiveRdvIndex((prevIndex) => (prevIndex === index ? -1 : index)); // Activer/désactiver le rdv au clic
  };

  // Vérifier si un rdv est actif pour définir la classe active/inactive du conteneur
  useEffect(() => {
    setIsActiveContainer(rdvs.some((rdv, index) => index === activeRdvIndex));
  }, [activeRdvIndex, rdvs]);

  return (
    <div
      className={`containerRdv ${isActiveContainer ? "active" : "inactive"}`}
    >
      {date && (
        <div className="date">
          <h1>{date}</h1>
        </div>
      )}
      <div className="boxRdvs">
        {rdvs.map((rdv, index) => (
          <Rdv
            key={index}
            name={rdv.name}
            hour={rdv.hour}
            isActive={index === activeRdvIndex}
            handleRdvClick={() => handleRdvClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

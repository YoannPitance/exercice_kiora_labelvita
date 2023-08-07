"use client";
import Rdv from "./Rdv";
import { useState } from "react";

export default function BlocRdv({ date, rdvs }) {
  const [activeRdvIndex, setActiveRdvIndex] = useState(-1);

  const handleRdvClick = (index) => {
    setActiveRdvIndex(index); // Activer le lien au clic
  };
  return (
    <div className="containerRdv">
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

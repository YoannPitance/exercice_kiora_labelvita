"use client";
import { useState } from "react";
import CollapseRdv from "./CollapseRdv";

export default function Rdv({ name, hour, isActive, handleRdvClick }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleSignalerArrivee = () => {
    // logique pour signaler l'arrivée au rendez-vous
    alert("Arrivée signalée pour le rendez-vous :", name);
  };
  const handleToggleCollapse = () => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };

  return (
    <div
      className={`Rdv ${isActive ? "active" : ""}`}
      onClick={() => {
        handleRdvClick(); // Appeler la fonction pour activer le rdv
        handleToggleCollapse(); // Appeler la fonction pour activer/désactiver le collapse
      }}
    >
      <h3>{name}</h3>
      <p>{hour}</p>
      {!isCollapsed && (
        <CollapseRdv
          isActive={isActive}
          handleSignalerArrivee={handleSignalerArrivee}
        />
      )}
    </div>
  );
}

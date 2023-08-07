"use client";
import { useState } from "react";
import CollapseRdv from "./CollapseRdv";

export default function Rdv({ name, hour, isActive, handleRdvClick }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`Rdv ${isActive ? "active" : ""}`}
      onClick={() => {
        handleRdvClick(); // Activer le rdv au clic
        handleToggleCollapse(); // Ouvrir ou fermer le collapse associé au clic sur le rdv
      }}
    >
      <h3>{name}</h3>
      <p>{hour}</p>
      {!isCollapsed && <CollapseRdv isOpen={true} />}
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";

export default function CollapseRdv({ isOpen }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleButtonClick = (e) => {
    // Empêche l'événement de se propager jusqu'au conteneur du collapse
    e.stopPropagation();
    // Gérer le clic sur le bouton ici (par exemple, afficher une alerte)
    alert("Je suis arrivé chez vous!");
  };
  useEffect(() => {
    setIsCollapsed(!isOpen);
  }, [isOpen]);

  const handleToggleCollapse = () => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };

  return (
    <div
      className={`collapse ${isOpen ? "show" : ""}`}
      onClick={handleToggleCollapse}
    >
      {!isCollapsed && (
        <div className="collapse-content">
          <button className="btn-circle" onClick={handleButtonClick}>
            Signaler mon arrivée
          </button>
        </div>
      )}
    </div>
  );
}

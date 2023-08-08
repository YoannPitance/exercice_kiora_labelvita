"use client";
import { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import "./conversations.scss";
import ConvBox from "../components/ConvBox";

export default function Conversations() {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  // tableaux de données de chaque bulle de conversations itérable depuis Api et db
  const contactsMsgs = [
    {
      contact: "/jennypic.png",
      contactName: "Jenny Hue",
      contactNumber: "06 45 78 98 54",
      contactMsg: "C'est parfait !",
      hourMsg: "11:29",
    },
    {
      contact: "/mariapic.png",
      contactName: "Maria Venice",
      contactNumber: "06 45 78 98 54",
      contactMsg: "Manon devait passer ce matin, je n'ai pas de nouvelles.",
      hourMsg: "15:30",
    },
    {
      contact: "/arthurpic.png",
      contactName: "Arthur Leric",
      contactNumber: "07 55 33 98 64",
      contactMsg:
        "Bonjour, j'ai besoin de vous demain matin si c'est possible.",
      hourMsg: "16:26",
    },
    {
      contact: "/jeannepic.png",
      contactName: "Jeanne Morrin",
      contactNumber: "06 55 54 98 64",
      contactMsg: "Que pouvez vous faire pour mon problème de tâche de vin?",
      hourMsg: "16:26",
    },
  ];
  return (
    <>
      <Header title="Conversations" iconeSrc="/returnarrow.png" />
      <section id="search">
        <div className="searchBox">
          <form>
            <input type="search" placeholder="Prénom, nom..." />
            <div className="searchBtn">
              <button type="submit" name="rechercher">
                <img src="/loupe.png" alt="icone loupe recherche" />
              </button>
            </div>
          </form>
          <div className="searchFilter">
            <Button
              icone="/iconetous.svg"
              activeIcon="/iconetouswhite.svg"
              text="Tous"
              isActive={activeFilter === "Tous"}
              onClick={() => handleFilterClick("Tous")}
            />
            <Button
              icone="/iconenonlu.svg"
              activeIcon="/iconenonluwhite.svg"
              text="Non lus"
              isActive={activeFilter === "Non lus"}
              onClick={() => handleFilterClick("Non lus")}
            />
            <Button
              icone="/iconearchive.svg"
              activeIcon="/iconearchivewhite.svg"
              text="Archivés"
              isActive={activeFilter === "Archivés"}
              onClick={() => handleFilterClick("Archivés")}
            />
          </div>
        </div>
      </section>
      <section id="conversations">
        <img
          className="bulleverte"
          src="/bullevertepage3.png"
          alt="bulle verte design"
        />
        <div className="convBoxContainer">
          {contactsMsgs.map((contactInfos, index) => (
            <ConvBox
              key={index}
              contact={contactInfos.contact}
              contactName={contactInfos.contactName}
              contactNumber={contactInfos.contactNumber}
              contactMsg={contactInfos.contactMsg}
              hourMsg={contactInfos.hourMsg}
              isFirst={index === 0} // sert pour determiner le 1 er bloc de conversation pour changer son index
            />
          ))}
        </div>
        <img
          className="bullebleue"
          src="/bullebleuepage3.png"
          alt="bulle bleue design"
        />
      </section>
    </>
  );
}

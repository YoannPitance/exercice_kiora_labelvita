"use client";
import Link from "next/link";
import { useState } from "react";

export default function FormLogin() {
  const [formData, setFormata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="inputConnexion">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Votre adresse email"
          value={formData.email || ""}
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          placeholder="Mot de passe"
          value={formData.password || ""}
          onChange={handleChange}
          name="password"
        />
        <div className="forgottenPwrd">
          <Link href="#">Mot de passe oublié ?</Link>
        </div>
        <div className="connexionBtn">
          <button type="submit">Connexion</button>
        </div>
      </form>
    </div>
  );
}

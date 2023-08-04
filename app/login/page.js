import Image from "next/image";
import Link from "next/link";
import "./login.module.scss";

export default function Login() {
  return (
    <>
      <div className="logoTitle">
        <Image src="/Logo1.png" width={219} height={71} alt="" />
      </div>
      <div className="vector4">
        <Image src="/Vector4.png" width={571} height={404} alt="" />
      </div>
      <section id="connexion">
        <div className="titleConnexion">
          <h2>Connexion à votre espace</h2>
          <h3>Bienvenue "User"</h3>
        </div>
        <div className="inputConnexion">
          <input type="text" placeholder="Votre adresse email" />
          <input type="text" placeholder="Mot de passe" />
        </div>
        <div className="forgottenPwrd">
          <Link href="#">Mot de passe oublié ?</Link>
        </div>
        <div className="connexionBtn">
          <button type="admit">Connexion</button>
        </div>
      </section>
      <section id="socialNetworkConnexion">
        <p>Ou...</p>
        <div className="group1">
          <ul>
            <li>
              <Link href="#"></Link>
            </li>
            <li>
              <Link href="#"></Link>
            </li>
            <li>
              <Link href="#"></Link>
            </li>
          </ul>
        </div>
        <div className="newAccount">
          <span>Vous n'êtes pas inscrits ?</span>
          <span>
            <Link href="#">Créer un compte</Link>
          </span>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import "./login.scss";

export default function Login() {
  return (
    <>
      <div className="vector4">
        <Image
          src="/Vector4.png"
          width={240}
          height={380}
          alt="image vectorielle design"
        />
      </div>
      <section id="title">
        <div className="logoTitle">
          <Image
            src="/Logo1.png"
            width={219}
            height={71}
            alt="Logo LaBel'Vita"
          />
        </div>
      </section>
      <section id="connexion">
        <div className="titleConnexion">
          <h2>Connexion à votre espace</h2>
          <h3>Bienvenue "User"!</h3>
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
        <div className="separation">
          <span>
            <img src="/Vector2.png" alt="trait de séparation" />
          </span>
          <span>Ou...</span>
          <span>
            <img src="/Vector2.png" alt="trait de séparation" />
          </span>
        </div>

        <div className="group1">
          <ul>
            <li>
              <Link href="#">
                <img src="/googlelogo.png" alt="Logo google" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <img src="/Groupfb.png" alt="Logo facebook" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <img src="/Vectorapple.png" alt="Logo Apple" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="newAccount">
          <span>Vous n'êtes pas inscrits ? </span>
          <span>
            <Link href="#">Créer un compte</Link>
          </span>
        </div>
      </section>
      <div className="vector5">
        <img
          src="/Vector5.png"
          width={300}
          height={220}
          alt="image vectorielle design"
        />
      </div>
    </>
  );
}

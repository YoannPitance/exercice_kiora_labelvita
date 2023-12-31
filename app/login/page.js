import Link from "next/link";
import "./login.scss";
import FormLogin from "../components/FormLogin";

export default function Login() {
  return (
    <>
      <header className="headerLogin">
        <div className="vector4">
          <img src="/Vector4.png" alt="image vectorielle design" />
        </div>

        <img className="logoTitle" src="/Logo1.png" alt="Logo LaBel'Vita" />
      </header>
      <section id="connexion">
        <div className="titleConnexion">
          <h2>Connexion à votre espace</h2>
          <h3>Bienvenue "User"!</h3>
        </div>
        <FormLogin />
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
        <img src="/Vector5.png" alt="image vectorielle design" />
      </div>
    </>
  );
}

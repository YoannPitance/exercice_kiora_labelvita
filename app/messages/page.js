import Header from "../components/Header";
import BulleChat from "../components/BulleChat";
import Link from "next/link";
import "./messages.scss";

export default function Messages() {
  return (
    <>
      <header className="headerMessages">
        <Header title="Jenny Hue" iconeSrc="/returnarrow.png" />
      </header>
      <section id="chatSection">
        <h3>26/05/23</h3>
        <BulleChat
          bulle="contactMsg"
          contact="/jennypic.png"
          message="Bonjour, pouvez-vous m'appeler ?"
          hourMsg="11:29"
        />
        <BulleChat
          bulle="MyMsg"
          contact="/userphoto2.png"
          message="Bonjour, je vous contacte dans 1h, ok pour vous ?"
          hourMsg="11:29"
        />
        <BulleChat
          bulle="contactMsg"
          contact="/jennypic.png"
          message="C'est parfait !"
          hourMsg="11:29"
        />
      </section>
      <footer>
        <form>
          <Link href="vers photo ou dossiers">
            <img src="/iconephoto.svg" alt="icone appareil photo" />
          </Link>
          <input type="text" placeholder="Votre message..." />
          <button type="submit">
            <img src="/iconeenvoi.svg" alt="icone d'envoi" />
          </button>
        </form>
      </footer>
    </>
  );
}

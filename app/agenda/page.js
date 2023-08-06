import Header from "../components/Header";
import BlocRdv from "../components/blocRdv";
import "./agenda.scss";

export default function Agenda() {
  return (
    <>
      <Header
        imageUrl="/userphoto.png"
        title="Bienvenue User"
        iconeSrc="/logochat.png"
      />
      <h2>Mes rendez-vous</h2>
      <BlocRdv />
    </>
  );
}

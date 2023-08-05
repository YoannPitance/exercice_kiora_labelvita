export default function blocRdv(props) {
  return (
    <div className="containerRdv">
      {props.date && <p>{props.date}</p>}
      <div className="Rdv">
        {props.name && <h3>{props.name}</h3>}
        {props.hour && <p>{props.hour}</p>}
      </div>
    </div>
  );
}

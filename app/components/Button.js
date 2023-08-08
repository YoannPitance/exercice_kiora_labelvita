export default function Button(props) {
  return (
    <>
      <button className="filterBtn">
        <img src={props.icone} alt="icone filtre" />
        <p>{props.text}</p>
      </button>
    </>
  );
}

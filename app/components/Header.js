export default function Header(props) {
  return (
    <div className="header">
      <div className="userPhoto">
        <img src={props.imageUrl} alt="photo médaillon user" />
      </div>

      {props.title && <h2>{props.title}</h2>}
      <img className="icone" src={props.iconeSrc} alt={props.alt} />
    </div>
  );
}

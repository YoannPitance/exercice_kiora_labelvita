export default function Rdv({ name, hour, isActive, handleRdvClick }) {
  return (
    <div className={`Rdv ${isActive ? "active" : ""}`} onClick={handleRdvClick}>
      <h3>{name}</h3>
      <p>{hour}</p>
    </div>
  );
}

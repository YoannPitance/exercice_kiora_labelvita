export default function Button({ icone, activeIcon, text, isActive, onClick }) {
  return (
    <>
      <button
        className={`filterBtn ${isActive ? "filterBtnActive" : ""}`}
        onClick={onClick}
      >
        <img src={isActive ? activeIcon : icone} alt="icone filtre" />
        <p>{text}</p>
      </button>
    </>
  );
}

// CollapseRdv.js

export default function CollapseRdv({ isActive, handleSignalerArrivee }) {
  return (
    <div className={`collapse ${isActive ? "show" : ""}`}>
      {isActive && (
        <div>
          <button onClick={handleSignalerArrivee}>Signaler mon arrivée</button>
        </div>
      )}
    </div>
  );
}

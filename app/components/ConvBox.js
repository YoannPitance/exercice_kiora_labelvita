export default function ConvBox({
  contact,
  contactName,
  contactNumber,
  contactMsg,
  hourMsg,
  isFirst,
}) {
  console.log(isFirst);
  return (
    <div className={`boxConversation ${isFirst ? "boxConversationFirst" : ""}`}>
      <div className="photoContact">
        <img src={contact} alt="photo du contact" />
      </div>
      <div className="infosMsg">
        <h3>{contactName}</h3>
        <p className="italic">{contactNumber} </p>
        <p>{contactMsg} </p>
      </div>
      <div className="hourMsg">
        <p>{hourMsg} </p>
      </div>
    </div>
  );
}

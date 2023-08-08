export default function ConvBox(props) {
  return (
    <div className="boxConversation">
      <div className="photoContact">
        <img src={props.contact} alt="photo du contact" />
      </div>
      <div className="infosMsg">
        <h3>{props.contactName}</h3>
        <p>{props.contactNumber} </p>
        <p>{props.contactMsg} </p>
      </div>
      <div className="hourMsg">
        <p>{props.hourMsg} </p>
      </div>
    </div>
  );
}

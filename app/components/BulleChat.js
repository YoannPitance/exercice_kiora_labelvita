import React from "react";

export default function BulleChat(props) {
  return (
    <div className={props.bulle}>
      <div className="photoContact">
        <img src={props.contact} alt="photo du contact" />
      </div>
      <p>{props.message} </p>
      <div className="hourMsg">
        <p>{props.hourMsg} </p>
      </div>
    </div>
  );
}

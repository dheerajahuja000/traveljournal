import React from "react";
import ReactDOM from "react-dom";

export default function Main(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.imageUrl} className="card-img"/>
      <div>
        <img src="../Images/pin.png" width="28px" height="30px" />

        <h4>{props.location}</h4>
        <p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </p>
        <h1>{props.title}</h1>
        <h4>
          {props.startDate} - {props.endDate}
        </h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

import React from "react";

export default function Task4item(props) {
  const item = props.item;
  return (
    <div className="card">
      <img src={item.image} className="card-img-top" alt="No dddd" />
      <div className="card-body">
        <h5 className="card-title">
          {" "}
          <b> Name: {item.name}</b>
        </h5>
        <h6 className="card-title">Worth: {item.worth}</h6>
        <h6 className="card-title">Birth Year: {item.birth_year} </h6>
        <h6 className="card-title">Country: {item.country} </h6>
        <p className="card-text">
          {" "}
          <b>Company: </b>
          {item.source}
        </p>
      </div>
    </div>
  );
}

import React from "react";

export default function Task1Item(props) {
  let item = props.item;
  return (
    <div className="col-lg-3 col-12 card m-2">
      <div className="card-body">
        <h2>Name:{item.name} </h2>

        <div className="row  mt-3">
          <div className="col">
            <p>
              Color: <b>{item.color}</b>{" "}
            </p>{" "}
          </div>
          <div
            style={{ background: item.color }}
            className="col opacity-75 rounded-5"
          ></div>
        </div>

        <p>Model:{item.model} </p>
        <p>Car speed:{item.speed} </p>
      </div>
    </div>
  );
}

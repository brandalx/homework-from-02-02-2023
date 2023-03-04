import React from "react";
import cars_arr from "./data/cars.js";
import Task1Item from "./task1Item";
export default function Task1App() {
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="my-5">Mission 1</h1>
        <h3>List of cars</h3>
        <div className="row">
          {cars_arr.map((item) => {
            return <Task1Item key={item.name} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

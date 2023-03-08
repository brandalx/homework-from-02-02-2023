import React, { useEffect, useState } from "react";
// import bug: images not shows up when im making reggular src path in images
import img1 from "./images/dice1.jpg";
import img2 from "./images/dice2.jpg";
import img3 from "./images/dice3.jpg";
import img4 from "./images/dice4.jpg";
import img5 from "./images/dice5.jpg";
import img6 from "./images/dice6.jpg";
export default function Task2App() {
  const [index, setIndex] = useState(0);
  const [point, setPoint] = useState(5);
  const [text, setText] = useState(
    "Welcome to the cube game, Press roll to start"
  );
  const [statusText, setStatusText] = useState("Press roll to start");
  const [statusColor, setStatusColor] = useState("blue");

  const cubeArr = [img1, img2, img3, img4, img5, img6];
  const handleRandom = () => {
    const random = Math.floor(Math.random() * 6);
    setPoint(point - 1);
    if (point > 0) {
      setText("Press Roll to continue, current points: ");
    }
    if (random === 5 || random === 6) {
      setPoint(point + 2);
      setStatusText("You won");
      setStatusColor("green");
    } else {
      setStatusText("You loosed this time");
      setStatusColor("red");
    }
    setIndex(random);
    if (point <= 0) {
      setText("You loose, the game will be restarted");
      setStatusText("Press roll to restart");
      setPoint(5);
      setStatusColor("red");
    } else {
    }
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="my-5">Mission 2</h1>
        <div className="text-center">
          <p>{text}</p>
          <h2 style={{ color: statusColor, fontWeight: "bold" }}>
            {statusText}
          </h2>
          <p>Your points is :{point} </p>
          <img src={cubeArr[index]} alt="" />
          <button
            onClick={handleRandom}
            className="btn btn-primary d-block mx-auto"
          >
            Roll
          </button>
        </div>
      </div>
    </div>
  );
}

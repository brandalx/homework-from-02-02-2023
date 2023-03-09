import React, { useEffect, useState } from "react";
import Task4item from "./task4item";

export default function Task4App() {
  const [finalArr, setFinalArr] = useState([]);

  const doApi = async (query) => {
    const url = "http://fs1.co.il/bus/vip.php";
    const resp = await fetch(url);
    const data = await resp.json();

    const arr = data.filter((ar) => ar.name === query);
    setFinalArr(arr);
  };

  useEffect(() => {
    doApi("Bill Gates");
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="my-5">Mission 4</h1>
        <div className="row align-items-center">
          <div className="col-6 ">
            <div className="d-flex flex-column  ">
              <button
                onClick={() => doApi("Bill Gates")}
                className="btn btn-outline-primary my-2"
              >
                Bill Gates
              </button>

              <button
                onClick={() => doApi("Warren Buffett")}
                className="btn btn-outline-primary my-2"
              >
                Warren Buffett
              </button>
              <button
                onClick={() => doApi("Mark Zuckerberg")}
                className="btn btn-outline-primary my-2"
              >
                Mark Zuckerberg
              </button>
              <button
                onClick={() => doApi("Larry Ellison")}
                className="btn btn-outline-primary my-2"
              >
                Larry Ellison
              </button>
              <button
                onClick={() => doApi("Michael Bloomberg")}
                className="btn btn-outline-primary my-2"
              >
                Michael Bloomberg
              </button>
            </div>
          </div>

          <div className="col-6">
            <div className="row">
              {finalArr.map((item) => (
                <Task4item key={item.name} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

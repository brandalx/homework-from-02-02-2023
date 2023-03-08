import React, { useEffect, useState } from "react";
import Task3Item from "./task3Item";
export default function Task3App() {
  const [ar, setAr] = useState([]);
  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url =
      "https://api.themoviedb.org/3/list/5?api_key=d4bc3c640586e7f90dc68d8b300247ff&language=en-US";
    const resp = await fetch(url);
    const data = await resp.json();
    const resultapi = data.items;
    setAr(resultapi);

    console.log(resultapi);
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="my-5">Mission 3</h1>
        <h2 className="text-center">Films list through API request:</h2>
        <div className="container">
          <div className="row justify-content-between">
            {ar.map((item) => {
              return <Task3Item key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

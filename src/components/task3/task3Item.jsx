import React from "react";

export default function Task3Item(props) {
  const item = props.item;
  return (
    <div className="col-lg-3 pt-3 ">
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          className="card-img-top"
          alt="No dddd"
        />
        <div className="card-body">
          <h5 className="card-title">
            {" "}
            <b> Film title: {item.original_title}</b>
          </h5>
          <h6 className="card-title">Release date: {item.release_date}</h6>
          <h6 className="card-title">Vote average: {item.vote_average} </h6>
          <p className="card-text">
            {" "}
            <b>Description: </b>
            {item.overview}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

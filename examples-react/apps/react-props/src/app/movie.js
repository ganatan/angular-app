import React from "react";

function Movie(props) {
  return <div>
    <p>Movie</p>
    <p>Movie.props.name : {props.name}</p>
  </div>;
}

export default Movie;
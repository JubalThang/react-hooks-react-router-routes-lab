import React from "react";
import { directors } from "../data";

function Directors() {
  const driectorsItem = directors.map(director => (
    <ul>
      <li key={director.name}>
        <h2>{director.name}</h2>
        <ol>
          {director.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ol>
      </li>
    </ul>)
  )
  return (
    <div>
      <h1>Directors</h1>
      {driectorsItem}
    </div>
    )
}

export default Directors;

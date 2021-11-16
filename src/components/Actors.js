import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsItem = actors.map(actor => (
    <ul>
      <li key={actor.name}>
        <h2>{actor.name}</h2>
        <ol>
          {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ol>
      </li>
    </ul>)
  )

  return (
    <div>
      <h1> Actors</h1>
      {actorsItem}
    </div>
  )
}

export default Actors;

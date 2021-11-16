import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h2>Movies Page</h2>
      <ul>
       {movies.map(movie => (
       <li key={movie}>
         <h1>{movie.title}</h1>
         <h5>Duration: {movie.time}</h5>
         <p> <ul>Genres: {movie.genres.map(genre =><li key={genre}><span>{genre}</span></li>)}</ul></p>
       </li>)
       )}
      </ul>
    </div>
  )
}

export default Movies;

import React from "react";
import { movies } from "../data";

function Movies(){
  const newMovie = movies.map((movie) => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>{movie.time} minutes</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>

    </div>
  ))

  
  
  
  
  return (
  <div>
    <h1>Movies Page</h1>
    {newMovie}

  </div>
  );
}

export default Movies;

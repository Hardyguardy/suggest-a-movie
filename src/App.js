import React, { useState } from "react";
import "./App.css";
import movies from "./Movies.json";
import Movie from "./Components/Movie";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const pickRandomMovie = () => {
    const random = Math.floor(Math.random() * movies.length);
    setSelectedMovie(movies[random]);
  };

  return (
    <div className="App flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 class="text-2xl font-bold text-centerr">Pick a random movie</h1>
        <button
          className="bg-blue-500 h-[50px] hover:bg-blue-700 text-white "
          onClick={pickRandomMovie}
        >
          Pick a movie
        </button>
        {selectedMovie && (
          <Movie name={selectedMovie.name} poster={selectedMovie.poster} />
        )}
      </div>
    </div>
  );
}

export default App;

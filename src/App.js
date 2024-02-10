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
        <h1 class="text-3xl font-bold text-center p-[20px]">
          Pick a random movie
        </h1>
        <div className="pb-[30px]">
          <button
            className="bg-blue-500 h-[50px] w-[150px] hover:bg-blue-700 text-white rounded-[12px]  "
            onClick={pickRandomMovie}
          >
            Pick a movie
          </button>
        </div>

        {selectedMovie && (
          <Movie name={selectedMovie.name} poster={selectedMovie.poster} />
        )}
      </div>
    </div>
  );
}

export default App;

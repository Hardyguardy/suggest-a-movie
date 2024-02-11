import React, { useEffect, useState } from "react";
import "./App.css";
import movies from "./Movies.json";
import Movie from "./Components/Movie";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const allGenres = new Set(movies.flatMap((movie) => movie.genres));
    setGenres(["All", ...allGenres]);
  });

  const pickRandomMovie = () => {
    const filteredMovies =
      selectedGenre === "All"
        ? movies
        : movies.filter((movie) => movie.genres.includes(selectedGenre));
    const random = Math.floor(Math.random() * filteredMovies.length);
    setSelectedMovie(filteredMovies[random]);
  };

  return (
    <div className="App flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 class="text-3xl font-bold text-center p-[20px]">
          Pick a random movie
        </h1>
        <div className="mb-4">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

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

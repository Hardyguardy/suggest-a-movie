import React, { useEffect, useState } from "react";
import "./App.css";
import movies from "./Movies.json";
import Movie from "./Components/Movie";
import DarkModeToggle from "./Components/DarkModeToggle";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedYear, setSelectedYear] = useState(2000);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const allGenres = new Set(movies.flatMap((movie) => movie.genres));
    setGenres(["All", ...allGenres]);
  });

  const pickRandomMovie = () => {
    const filteredMovies = movies.filter((movie) => {
      return (
        (selectedGenre === "All" || movie.genres.includes(selectedGenre)) &&
        movie.year >= selectedYear &&
        movie.year < selectedYear + 10
      ); // Adjust this logic as needed
    });
    const random = Math.floor(Math.random() * filteredMovies.length);
    setSelectedMovie(filteredMovies[random]);
  };

  return (
    <div className="App flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <DarkModeToggle />
        <h1 class="text-3xl font-bold text-center p-[20px]">
          Pick a random movie based <br /> on Hardy Guardy's taste and other
          friends!
        </h1>
        <p class="text-lg mb-[20px]">Select a genre and year to get started</p>
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
          <input
            type="range"
            min="1980"
            max="2020"
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            className="slider mb-4 mt-[20px]"
          />
          <p className="text-lg font-bold">
            Year: {selectedYear} - {selectedYear + 9}
          </p>
        </div>

        <div className="pb-[30px]">
          <button
            className="bg-blue-400 h-[50px] w-[250px] hover:bg-blue-600 text-white rounded-[12px] text-[18px] font-bold "
            onClick={pickRandomMovie}
          >
            Pick a random movie again
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

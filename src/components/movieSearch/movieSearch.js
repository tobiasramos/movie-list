import React, { useState } from "react";
import axios from "axios";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const apiImg = "https://image.tmdb.org/t/p/w500/";

  const handleSearch = () => {
    const apiUrl = "https://api.themoviedb.org/3/search/movie";

    axios
      .get(apiUrl, {
        params: {
          api_key: "8ed200f50a6942ca5bc8b5cdec27ff22",
          query: searchQuery,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log("Erro ao consultar a API:", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Digite o nome do filme"
      />
      <button onClick={handleSearch}>Buscar</button>

      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={apiImg + movie.poster_path} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;

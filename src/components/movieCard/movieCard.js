import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  const apiImg = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const apiUrl = "https://api.themoviedb.org/3/movie/popular";
   
    axios
      .get(apiUrl, {
        params: {
          api_key: "8ed200f50a6942ca5bc8b5cdec27ff22",
        },
      })
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log("Erro ao consultar a API:", error);
      });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={apiImg + movie.poster_path} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;

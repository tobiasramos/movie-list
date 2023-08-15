import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

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
    <CardContainer>
      {movies.map((movie) => (
        <Card key={movie.id}>
          <img src={apiImg + movie.poster_path} alt={movie.title} />
          <h4>{movie.title}</h4>
          <button>Detalhes</button>
        </Card>
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  margin: 6px;
  padding: 5px;
  text-align: center;

  border: 3px solid #564d4d;

  img {
    width: 20rem;
  }

  button {
    cursor: pointer;
    width: 100%;
    height: 5vh;
    border: none;
    font-size: 16px;
    color: #000;
    background-color: #db0000;
  }
`;

export default MovieCard;

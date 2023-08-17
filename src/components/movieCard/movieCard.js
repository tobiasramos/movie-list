import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import Card from "../card/card";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);

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
      })
      .catch((error) => {
        console.log("Erro ao consultar a API:", error);
      });
  }, []);

  return (
    <CardContainer>
       {movies.map((movie) => (
        <Card key={movie.id} movie={movie} showDetailsButton={true} />
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

export default MovieCard;

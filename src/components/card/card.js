import React from "react";
import { styled } from "styled-components";

const Card = ({ movie }) => {
  const apiImg = "https://image.tmdb.org/t/p/w500/";

  return (
    <StyledCard>
      <img src={apiImg + movie.poster_path} alt={movie.title} />
      <h4>{movie.title}</h4>
      <button>Detalhes</button>
    </StyledCard>
  );
};

const StyledCard = styled.div`
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

export default Card;

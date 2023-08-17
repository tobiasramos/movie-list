import React from "react";
import { useHistory } from "react-router-dom";
import { styled } from "styled-components";

const Card = ({ movie, showDetailsButton = true, onBackClick }) => {
  const apiImg = "https://image.tmdb.org/t/p/w500/";
  const history = useHistory();

  const handleDetailsClick = () => {
    history.push(`/movie/${movie.id}`);
  };

  return (
    <StyledCard>
      {showDetailsButton ? (
        <>
          <img src={apiImg + movie.poster_path} alt={movie.title} />
          <h4>{movie.title}</h4>
          <button onClick={handleDetailsClick}>Detalhes</button>
        </>
      ) : (
        <DetailContainer>
          <div>
            <img src={apiImg + movie.poster_path} alt={movie.title} />
            <h4>{movie.title}</h4>
          </div>
          <Description>
            <p>
              Data de lançamento: <span>{movie.release_date}</span>
            </p>
            <p>
              Média de votos: <span>{movie.vote_average.toFixed(1)}</span>
            </p>
            <p>
              Descrisão: <span>{movie.overview}</span>
            </p>
            <button onClick={onBackClick}>Voltar</button>
          </Description>
        </DetailContainer>
      )}
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

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  padding: 10px;
  width: 40rem;
  height: 40vh;
  border: 1px solid #fff;
  border-radius: 10px;

  p {
    margin-bottom: 15px;
  }

  span {
    color: #675d5d;
  }

  button {
    margin: auto auto;
    width: 70%;
  }
`;
export default Card;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Card from "../card/card";

const MovieDetail = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const movieId = match.params.id;

    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: "8ed200f50a6942ca5bc8b5cdec27ff22",
        },
      })
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Erro ao consultar a API:", error);
      });
  }, [match.params.id]);

  const handleGoBack = () => {
    history.goBack();
  };

  if (!movie) {
    return <div>Carregando...</div>;
  }
  return (
    <div>
      <Card
        movie={movie}
        showDetailsButton={false}
        onBackClick={handleGoBack}
      />
    </div>
  );
};

export default MovieDetail;

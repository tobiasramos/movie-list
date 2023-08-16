import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams(); // Obtém o parâmetro "id" da URL

  return (
    <div>
      <h2>Detalhes do Filme</h2>
      <p>ID do Filme: {id}</p>
      {/* Você pode adicionar mais detalhes do filme aqui */}
    </div>
  );
};

export default MovieDetails;

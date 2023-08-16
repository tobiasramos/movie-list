import React, { useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import Card from "../card/card";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

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
        setSearchTerm(searchQuery);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log("Erro ao consultar a API:", error);
      });
  };

  return (
    <div>
      <Logo>Movie List</Logo>
      <SearchContainer>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Digite o nome do filme"
        />
        <button onClick={handleSearch}>Buscar</button>
      </SearchContainer>

      {searchTerm && (
        <SearchResult>Resultado de busca com: {searchTerm}</SearchResult>
      )}

      <CardContainer>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </CardContainer>
    </div>
  );
};

const Logo = styled.h1`
  color: #db0000;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    background-color: #db0000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const SearchResult = styled.h1`
  margin-top: 10px;
  font-weight: bold;
`;
const CardContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default MovieSearch;

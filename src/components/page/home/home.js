import { useState } from "react";
import MovieCard from "../../movieCard/movieCard";
import MovieSearch from "../../movieSearch/movieSearch";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <MovieSearch onSearch={setSearchResults} />
      {searchResults.length === 0 ? <MovieCard /> : null}
    </div>
  );
};

export default Home;

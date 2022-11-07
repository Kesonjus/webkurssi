import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./component/Movie";

const App = () => {
  const apikey = "a4afe00d726c9f4c2ec701268d7fc490";
  const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;
  const baseUrl = "https://api.themoviedb.org/3";

  const [title, setTitle] = useState("Popular Movies");
  const [popular, setPopular] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPopular = () => {
    axios.get(popularUrl).then((res) => {
      setPopular(res.data.results);
    });
  }

  function searchMovies(searchTerm) {
    setPopular([]);
    setTitle("Results for "+searchTerm);
    axios
      .get(`${baseUrl}/search/movie?api_key=${apikey}&query=${searchTerm}`)
      .then((res) => {
        setSearchResults(res.data.results);
      });
  }

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    fetchPopular();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <h1>{title}</h1>
      <div className="search-movies">
        <input type="text" id="movieName" name="movieName" onChange={handleSearchTerm} placeholder="Search Movies" />
        <button type="submit" onClick={()=>searchMovies(searchTerm)}>Search</button>
      </div>
      <div className="movie-card">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
      <div className="movie-card">
        {searchResults.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
export default App;

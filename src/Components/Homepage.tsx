import React, { useEffect, useState } from "react";
import { MovieTypes } from "../constants/MovieTypes";
import axios from "axios";
import Favorites from "./Favorites";

const Homepage = () => {
  const [movies, setMovies] = useState<MovieTypes[] | null>(null);

  const handleAddToFavorites = (movie: MovieTypes): void => {
    axios
      .post("http://localhost:8080/favorites", movie)
      .then((res) => {
        alert("Movie Added to your list");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!movies) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Movies</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {movies.map((ele, ind) => (
          <div onClick={() => handleAddToFavorites(ele)} key={ind}>
            <h2>{ele.title}</h2>
            <p>{ele.genre}</p>
            <img src={ele.poster} />
          </div>
        ))}
      </div>

      <Favorites />
    </div>
  );
};

export default Homepage;

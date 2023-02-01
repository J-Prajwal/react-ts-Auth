import React, { useEffect, useState } from "react";
import { MovieTypes } from "../constants/MovieTypes";
import axios from "axios";

const Favorites = () => {
  const [favs, setFavs] = useState<MovieTypes[] | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/favorites")
      .then((res) => {
        setFavs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if(!favs) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h1>Favorites 🚀</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {favs.map((ele, ind) => (
          <div key={ind}>
            <h2>{ele.title}</h2>
            <p>{ele.genre}</p>
            <img src={ele.poster} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

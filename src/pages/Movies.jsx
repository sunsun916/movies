import React from "react";
import Movie from "../components/Movie";
import { data } from "../movieData";

export default function Movies() {
  return (
    <div>
      <div className="movies-container">
        {data.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          );
        })}
      </div>
    </div>
  );
}

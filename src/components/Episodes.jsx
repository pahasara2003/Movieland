//Fuck you

import React, { useEffect, useState } from "react";
import movieimage from "../assets/default_movie.jpg";
export const Episodes = ({ id, light }) => {
  const [data, set_data] = useState(null);
  const url = `https://api.themoviedb.org/3/tv/${id[0]}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjcwODM3ODg5ZjkyMjhlMTdlMzM1M2IxMjdmNTMyZiIsInN1YiI6IjY1MWFjZmE3YzUwYWQyMDBhZDgxNmNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kO735jpbO_XxhEtRIvdx1fQmNWnee4QkdLV7T-skMUI",
    },
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const d = await response.json();
      set_data(d.seasons);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const Card = ({ season, date, episodes, image, overview, light }) => {
    return (
      <div className={`h-fit flex flex-col items-center `}>
        <img
          src={image}
          className="w-[400px] h-[400px] relative object-cover object-top "
        />

        <div
          className={`relative top-[0px] p-5 ${
            light ? "text-black" : "text-white"
          }`}
        >
          <h1 className="font-bold text-xl m-1 text-center">Season {season}</h1>
          <h2>Aired Date : {date}</h2>
          <h2>Episodes : {episodes}</h2>

          <p className="text-justify mt-2 max-w-[400px] inline-block align-top ">
            {overview}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap justify-center py-10">
      {data !== null
        ? data.map((d, i) => {
            if (i != 0) {
              return (
                <Card
                  season={d.season_number}
                  date={d.air_date}
                  episodes={d.episode_count}
                  overview={d.overview}
                  image={
                    d.poster_path !== null
                      ? `https://image.tmdb.org/t/p/w500${d.poster_path}`
                      : movieimage
                  }
                  light={light}
                />
              );
            }
          })
        : null}
    </div>
  );
};

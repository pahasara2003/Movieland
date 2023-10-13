import React, { useEffect, useState } from "react";
import movieimage from "../assets/default_movie.jpg";
import { Link } from "react-router-dom";

export const Recommands = ({ id, light }) => {
  const [data, set_data] = useState();
  const url = `https://api.themoviedb.org/3/${id[1]}/${id[0]}/recommendations?language=en-US&page=1`;
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
      set_data(d.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const Card = ({ season, type, lan, image, rating, id, light }) => {
    return (
      <Link
        className={`w-[250px] cursor-pointer`}
        to={`/Movieland/${type}/${season.replace(/ /g, "+")}`}
        state={[id, type]}
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        <img src={image} className="w-[250px] object-cover object-top " />

        <div
          className={`text-center p-5 ${light ? "text-black" : "text-white"}`}
        >
          <h1 className="font-bold text-lg m-1 text-center">{season}</h1>
          <h2>{type}</h2>
          <h2>{lan}</h2>

          <p className="text-justify mt-2 max-w-[400px] inline-block align-top ">
            <i class="fa-solid fa-star"></i> {rating}
          </p>
        </div>
      </Link>
    );
  };

  return (
    <div
      className={`flex flex-wrap justify-center ${
        light ? "bg-white" : "bg-gradient-to-t from-[#1b1b1f]  to-[#0f0f0f]"
      } py-10 w-full`}
    >
      {data
        ? data.map((d, i) => {
            if (i < 12) {
              return (
                <Card
                  season={d.original_title || d.name}
                  type={d.media_type}
                  lan={d.original_language}
                  rating={d.vote_average}
                  image={
                    d.poster_path !== null
                      ? `https://image.tmdb.org/t/p/w500${d.poster_path}`
                      : movieimage
                  }
                  id={d.id}
                  light={light}
                />
              );
            }
          })
        : null}
    </div>
  );
};

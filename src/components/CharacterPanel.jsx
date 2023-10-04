import React, { useEffect, useState } from "react";
import movieimage from "../assets/default_movie.jpg";
export const CharacterPanel = ({ id, light, isActing, set_id }) => {
  const [cast, set_cast] = useState(null);
  const [crew, set_crew] = useState(null);
  const url = `https://api.themoviedb.org/3/person/${id[0]}/movie_credits?language=en-US`;
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
      set_cast(d.cast);
      set_crew(d.crew);
      console.log(crew);
    } catch (error) {
      console.log(error);
    }
  };

  const Card = ({ title, character, image, id, light, set_id, type }) => {
    return (
      <div
        className={`w-[200px] cursor-pointer`}
        onClick={() => {
          set_id([id, "movie"]);
          window.scrollTo({ top: 0 });
        }}
      >
        <img src={image} className="w-full object-cover object-top " />

        <div
          className={`text-center p-5 ${light ? "text-black" : "text-white"}`}
        >
          <h1 className="font-bold text-lg text-center">{title}</h1>
          <p className="text-red-500 font-bold">{type}</p>
          <h2>{character}</h2>
        </div>
      </div>
    );
  };

  const CardFlow = ({ data, title, light, set_id }) => {
    return (
      <>
        {data !== null
          ? data.map((d) => {
              if (d.popularity > 20) {
                return (
                  <Card
                    light={light}
                    title={d.title}
                    character={d.character ? d.character : d.job}
                    image={
                      d.poster_path === undefined || d.poster_path === null
                        ? movieimage
                        : `https://image.tmdb.org/t/p/w500${d.poster_path}`
                    }
                    id={d.id}
                    set_id={set_id}
                    type={title}
                  />
                );
              }
            })
          : null}
      </>
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CardFlow data={cast} title={"movie"} light={light} set_id={set_id} />
      <CardFlow data={crew} title={"movie"} light={light} set_id={set_id} />
    </>
  );
};

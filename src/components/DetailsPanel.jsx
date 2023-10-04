import React from "react";
import { useState, useEffect } from "react";
import { DetailsCard } from "./DetailsCard";
import { CrewCard } from "./CrewCard";
import movieimage from "../assets/default_movie.jpg";

export const DetailsPanel = ({ id, light, set_id }) => {
  const [data, setdata] = useState([]);
  const [images, setImages] = useState([null]);
  const [crew, setcrew] = useState([null]);

  const get_details = async () => {
    const url = `https://api.themoviedb.org/3/${id[1]}/${id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjcwODM3ODg5ZjkyMjhlMTdlMzM1M2IxMjdmNTMyZiIsInN1YiI6IjY1MWFjZmE3YzUwYWQyMDBhZDgxNmNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kO735jpbO_XxhEtRIvdx1fQmNWnee4QkdLV7T-skMUI",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setdata(json);
      })
      .catch((err) => console.error("error:" + err));
  };
  const get_images = async () => {
    const url = `https://api.themoviedb.org/3/${id[1]}/${id}/images`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjcwODM3ODg5ZjkyMjhlMTdlMzM1M2IxMjdmNTMyZiIsInN1YiI6IjY1MWFjZmE3YzUwYWQyMDBhZDgxNmNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kO735jpbO_XxhEtRIvdx1fQmNWnee4QkdLV7T-skMUI",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setImages(json);
      })
      .catch((err) => console.error("error:" + err));
  };

  const get_crew = async () => {
    let s = id[1];
    const url = `https://api.themoviedb.org/3/${id[1]}/${id[0]}/credits?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjcwODM3ODg5ZjkyMjhlMTdlMzM1M2IxMjdmNTMyZiIsInN1YiI6IjY1MWFjZmE3YzUwYWQyMDBhZDgxNmNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kO735jpbO_XxhEtRIvdx1fQmNWnee4QkdLV7T-skMUI",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setcrew(json);
      })
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    get_details();
    get_images();
    get_crew();
    console.log(crew);
  }, [id]);
  return (
    <>
      <div
        className={`w-full flex flex-wrap justify-center relative before:block before:absolute before:-inset-0  before:bg-gradient-to-t to-transparent ${
          light ? "from-white" : "from-[#1b1b1f]"
        } `}
      >
        {images.backdrops !== undefined &&
          images.backdrops.slice(0, 8).map((i) => {
            return (
              <img
                className="w-[25%]"
                src={`https://image.tmdb.org/t/p/w500${i.file_path}`}
              />
            );
          })}
      </div>
      <div
        className={`flex flex-wrap ${
          light
            ? "bg-white"
            : "bg-gradient-to-t from-[#0f0f0f] to-[#1b1b1f] text-white"
        } justify-center gap-5 w-full px-10 shadow-lg z-40 relative m-auto mb-10 pb-10`}
      >
        <img
          className="w-[370px] object-cover"
          src={
            data.poster_path == undefined || data.poster_path == null
              ? movieimage
              : `https://image.tmdb.org/t/p/w500${data.poster_path}`
          }
        />
        <DetailsCard data={data} id={id} light={light} />
        <CrewCard crew={crew} data={data} light={light} set_id={set_id} />
      </div>
    </>
  );
};

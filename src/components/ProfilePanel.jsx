import React, { useEffect, useState } from "react";
import profile from "../assets/default_profile.jpeg";
import { CharacterPanel } from "./CharacterPanel";
import { CharacterPanel2 } from "./CharacterPanel2";

export const ProfilePanel = ({ id, light, set_id }) => {
  const [data, set_data] = useState(null);
  const [isActing, set] = useState(null);
  const url = `https://api.themoviedb.org/3/person/${id[0]}?language=en-US`;
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
      set_data(d);
      set(data.known_for_department === "Acting");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const Card = ({ image, name, birth, department, bio, death, place }) => {
    return (
      <div
        className={`${
          light ? "bg-white" : "bg-[#1b1b1f] text-white"
        }  p-5 pt-[100px] mt-[100px] justify-center flex-wrap flex w-full`}
      >
        <h1 className="text-[3rem] text-center font-bold text-red-500 w-full m-5">
          {name}
        </h1>
        <img src={image} className="w-[370px] object-cover" alt="dd" />
        <div className="max-w-[70%] p-2 px-3 divide-y my-2">
          <div className="py-6  ">
            <p className="inline-block my-2 ">
              <span className="fact">Birth </span>
              {birth}
            </p>
            <p className="flex my-2">
              <span className="fact">Place of birth</span>
              <span className="inline-block"> {place}</span>
            </p>
            <p className="flex my-2">
              <span className="fact">Death</span> {death ? death : "N/A"}
            </p>
            <p className="flex my-2">
              <span className="fact">Known For </span>
              {department}
            </p>
          </div>
          <p className={`${light ? "text-gray-600" : "text-gray-300"} py-5`}>
            {bio}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      {data !== null ? (
        <Card
          name={data.name}
          bio={data.biography}
          birth={data.birthday}
          death={data.deathday}
          place={data.place_of_birth}
          department={data.known_for_department}
          image={
            data.profile_path !== null
              ? `https://image.tmdb.org/t/p/w500${data.profile_path}`
              : profile
          }
        />
      ) : null}
      <div className="flex flex-wrap gap-1 py-10 justify-center">
        <CharacterPanel
          id={id}
          light={light}
          isActing={isActing}
          set_id={set_id}
        />
        <CharacterPanel2
          id={id}
          light={light}
          isActing={isActing}
          set_id={set_id}
        />
      </div>
    </div>
  );
};

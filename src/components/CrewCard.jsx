import React from "react";
import profile from "../assets/default_profile.jpeg";
export const CrewCard = ({ crew, data, light, set_id }) => {
  const CastCard = ({ image, name, character, id, set_id }) => {
    return (
      <div
        className="flex justify-start divide-y cursor-pointer"
        onClick={() => {
          set_id([id, "person"]);
        }}
      >
        <img
          className="w-[50px] h-[50px] object-cover rounded-full  m-5 my-2"
          src={image}
        />
        <div className="flex-wrap items-center flex">
          <span>{name}</span>
          <span
            className={` mx-3 text-lg ${
              light ? "text-slate-800" : "text-gray-300"
            } `}
          >
            as
          </span>
          <span>{character}</span>
        </div>
      </div>
    );
  };

  const BoardCard = ({ image, name, character, id, set_id }) => {
    return (
      <div
        className="flex flex-col w-[80px] items-start  cursor-pointer"
        onClick={() => {
          set_id([id, "person"]);
        }}
      >
        <span className="text-center">
          {character !== "Original Music Composer" ? character : "Music"}
        </span>
        <img
          className="w-[70px] h-[70px] object-cover rounded-full  m-1 my-2"
          src={image}
        />

        <span className="text-center">{name}</span>
      </div>
    );
  };

  return (
    <div className={`px-2 py-8 gap-2 flex flex-col w-[500px] `}>
      {crew.cast !== undefined
        ? crew.cast.slice(0, 5).map((c) => {
            return (
              <CastCard
                name={c.name}
                character={c.character}
                image={
                  c.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500${c.profile_path}`
                    : profile
                }
                id={c.id}
                set_id={set_id}
              />
            );
          })
        : null}
      <div className="py-3 flex gap-2 justify-around flex-wrap">
        {crew.crew !== undefined
          ? crew.crew
              .filter((e) => {
                return [
                  "Director",
                  "Screenplay",
                  "Original Music Composer",
                ].includes(e.job);
              })
              .map((c) => {
                return (
                  <BoardCard
                    name={c.name}
                    character={c.job}
                    image={
                      c.profile_path !== null
                        ? `https://image.tmdb.org/t/p/w500${c.profile_path}`
                        : profile
                    }
                    id={c.id}
                    set_id={set_id}
                  />
                );
              })
          : null}

        {data.created_by !== undefined ? (
          data.created_by[0] !== undefined ? (
            <BoardCard
              name={data.created_by[0].name}
              character={"Created by"}
              image={
                data.created_by[0].profile_path !== null
                  ? `https://image.tmdb.org/t/p/w500${data.created_by[0].profile_path}`
                  : profile
              }
            />
          ) : null
        ) : null}
      </div>
    </div>
  );
};

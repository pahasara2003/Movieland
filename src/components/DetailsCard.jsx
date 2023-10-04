import React from "react";

export const DetailsCard = ({ data, id, light }) => {
  return (
    <div className={`px-2 py-8 gap-2 flex flex-col w-[450px]`}>
      <h1 className="font-bold text-[2rem]  ">
        {data.title || data.name}{" "}
        <span className="text-[1.3rem] text-red-500">
          &nbsp; &#183; &nbsp;{id[1]}
        </span>
      </h1>
      <p className={`text-lg ${light ? "text-slate-800" : "text-gray-300"} `}>
        {data.tagline}
      </p>
      <hr />
      <p className="py-5 pr-10">{data.overview}</p>

      <p className="font-bold  text-[1.3rem] ">
        <i className="fa-brands fa-imdb mr-2 text-[1.9rem] "></i>
        <span className="">{data.vote_average}</span>
        <span
          className={`text-lg ${light ? "text-slate-800" : "text-gray-400"} `}
        >
          &nbsp; / 10
        </span>
      </p>
      <p>
        <span className="font-bold mr-4">{data.status}</span>{" "}
        <span>{data.release_date}</span>
      </p>
      <p>
        <i className="fa-solid fa-tags text-lg mr-4"></i>
        {data.genres !== undefined &&
          data.genres.map((i) => (
            <span id={Math.random()}> {i.name} &#183; &nbsp;</span>
          ))}
      </p>

      <p>
        <i className="fa-solid fa-language text-[1.4rem] mr-2"></i>
        {data.original_language}
      </p>

      <p>
        <i className="fa-solid fa-globe text-[1.2rem] mr-4"></i>
        {data.production_countries !== undefined &&
          data.production_countries.map((i) => (
            <span>{i.name} &#183; &nbsp;</span>
          ))}
      </p>
      <p>
        {data.production_companies !== undefined &&
          data.production_companies.map((i) => (
            <span>{i.name} &nbsp; &#183; &nbsp;</span>
          ))}
      </p>
    </div>
  );
};

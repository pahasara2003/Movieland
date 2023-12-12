import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination.jsx";
import { useTheme } from "../Config.jsx";
import { Link } from "react-router-dom";

export const MoviePanel = ({ urls, options, title, type }) => {
  const light = useTheme();
  const [Query, setQuery] = useState([0]);
  const [data, setData] = useState(null);
  const [page_no, goto_page] = useState(0);
  const setup = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjcwODM3ODg5ZjkyMjhlMTdlMzM1M2IxMjdmNTMyZiIsInN1YiI6IjY1MWFjZmE3YzUwYWQyMDBhZDgxNmNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kO735jpbO_XxhEtRIvdx1fQmNWnee4QkdLV7T-skMUI",
    },
  };
  useEffect(() => {
    fetch(urls[Query[0]], setup)
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
      })
      .catch((err) => console.error("error:" + err));
  }, Query);

  const Card = ({ title, image, id, type, ratings }) => {
    return (
      <Link
        to={`/Movieland/${type}/${title.replace(/ /g, "+")}`}
        state={[id, type]}
        className="cursor-pointer   my-1  w-[250px] "
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        <div className="w-full loader h-[350px] ">
          <img
            className="w-full opacity-0 h-[350px] object-cover "
            src={image}
            alt={{ image } + "poster"}
            onLoad={(e) => {
              e.target.style.opacity = 1;
            }}
          />
        </div>
        <div>
          <h1 className="text-center p-2 ">{title}</h1>
          <h2 className="text-center text-red-500 font-bold ">
            {" "}
            <i className="fa-solid fa-star"></i> &nbsp;
            {ratings}
          </h2>
        </div>
      </Link>
    );
  };

  function Page({ n, type }) {
    return (
      <div className="flex  pb-5 flex-wrap justify-center ">
        {data !== null
          ? data.slice(5 * n, 5 * n + 5).map((item, i) => {
              return (
                <Card
                  title={item.title || item.name}
                  image={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                  key={item.id}
                  id={item.id}
                  type={type}
                  ratings={item.vote_average}
                />
              );
            })
          : null}
      </div>
    );
  }

  function CreatePages({ type }) {
    if (data !== null) {
      let len = Math.ceil(data.length / 5);

      return (
        <div className=" flex-col">
          <Pagination
            count={len}
            func={goto_page}
            opened={page_no}
            light={light}
          />
          <Page n={page_no} type={type} />
        </div>
      );
    }
  }

  return (
    <div
      className={`${
        light
          ? "bg-white"
          : "bg-gradient-to-r from-[#29292e] to-[#1c1d1f] text-white ring-[#2f2f36] ring-1"
      }  w-[90%] shadow-md  my-5 mt-[100px] flex flex-wrap justify-center mx-auto`}
    >
      <div className="w-full flex justify-evenly flex-wrap p-[50px] pb-3 text-center">
        <h1 className="font-bold text-[2rem] mx-5">{title}</h1>
        <ul className="flex gap-1">
          {options.map((o, i) => (
            <li
              className={`${
                i === Query[0] ? "bg-red-500" : "bg-[#1c1d1f]"
              } text-[0.65rem] text-white py-[0.3rem] p-[0.21rem] h-fit rounded-md  lg:p-3 lg:text-[1rem] lg:h-[3rem] cursor-pointer lg:mx-2  lg:px-[1.5rem]`}
              onClick={() => {
                setQuery([i]);
              }}
              key={i}
            >
              {o}
            </li>
          ))}
        </ul>
      </div>
      <CreatePages type={type} />
    </div>
  );
};

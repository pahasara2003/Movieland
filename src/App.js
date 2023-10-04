import { useState } from "react";
import Searchbar from "./components/Searchbar";
import { DetailsPanel } from "./components/DetailsPanel";
import { MoviePanel } from "./components/MoviePanel";
import { Episodes } from "./components/Episodes";
import { Recommands } from "./components/Recommands";
import { Videos } from "./components/Videos";
import { ProfilePanel } from "./components/ProfilePanel";
import "../src/fontawesome-free-6.4.0-web/css/all.css";
export default function App() {
  const [id, set_id] = useState([null, null]);
  const [light, setmood] = useState(() => {
    return true;
  });

  const url_movie = [
    "https://api.themoviedb.org/3/movie/upcoming",
    "https://api.themoviedb.org/3/movie/popular",
    "https://api.themoviedb.org/3/movie/top_rated",
    "https://api.themoviedb.org/3/movie/now_playing",
  ];

  const url_tv = [
    "https://api.themoviedb.org/3/tv/top_rated",
    "https://api.themoviedb.org/3/tv/on_the_air?",
    "https://api.themoviedb.org/3/tv/popular",

    "https://api.themoviedb.org/3/tv/on_the_air",
  ];

  let options_movie = ["Upcomming", "Popular", "Top Rated", "Now Playing"];
  let options_tv = ["Top Rated", "On The Air", "Popular", "Airing Today"];

  return (
    <div
      className={`${
        light ? "bg-[#f2f2f2]" : "bg-[#1b1b1f]"
      } flex flex-col items-center`}
    >
      <div className="fixed gap-3 right-10 bottom-10 z-50 flex flex-col mr-3">
        <button
          className={`w-[3.5rem]  h-[3.5rem] ${
            light ? "text-gray-100 bg-gray-900" : "bg-gray-100 text-gray-900"
          } rounded-full shadow-md  ring-gray-500  text-center `}
          onClick={() => {
            set_id([null, null]);
          }}
        >
          <i className="fa-solid fa-house text-[1.2rem] p-0"></i>
        </button>
        <button
          className={`w-[3.5rem]  h-[3.5rem] ${
            light ? "text-gray-100 bg-gray-900" : "bg-gray-100 text-gray-900"
          } rounded-full shadow-md  ring-gray-500  text-center `}
          onClick={() => {
            setmood(!light);
          }}
        >
          {light ? (
            <i className="fa-solid fa-sun text-[1.2rem]"></i>
          ) : (
            <i className="fa-solid fa-moon text-[1.2rem]"></i>
          )}
        </button>
      </div>
      <Searchbar set_id={set_id} light={light} />
      {id[0] !== null && id[1] !== "person" ? (
        <>
          <DetailsPanel id={id} light={light} set_id={set_id} />
          <Videos id={id} />
          {id[1] === "tv" ? <Episodes id={id} light={light} /> : null}
          <Recommands id={id} set_id={set_id} light={light} />
        </>
      ) : null}
      {id[0] !== null && id[1] === "person" ? (
        <ProfilePanel id={id} set_id={set_id} light={light} />
      ) : null}
      {id[0] === null && (
        <div className="flex flex-col items-center">
          <MoviePanel
            title={"Movies"}
            set_id={set_id}
            urls={url_movie}
            options={options_movie}
            type={"movie"}
            light={light}
          />
          <MoviePanel
            title={"TV series"}
            set_id={set_id}
            urls={url_tv}
            options={options_tv}
            type={"tv"}
            light={light}
          />
        </div>
      )}
      <div className="text-center bg-[#0f0f0f] p-5 text-lg mt-10 w-full text-white">
        &copy; Pahasara Wickramasinghe
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import movieimage from "../assets/default_movie.jpg";

export default function Searchbar({ set_id, light }) {
  const [data, setdata] = useState([]);
  const [display, setdisplay] = useState(false);
  const [name, set_name] = useState("pirates of the caribbean");
  const url = "https://api.themoviedb.org/3/search/multi?";

  const search = async () => {
    try {
      const response = await fetch(
        `${url}query=${name}&api_key=3b70837889f9228e17e3353b127f532f&sort_by=popularity.asc`
      );
      const result = await response.json();
      setdata(result.results);
    } catch (error) {}
  };

  const Card = ({ title, image, type, id }) => {
    return (
      <div
        className={`h-[70px] cursor-pointer ${
          light ? "bg-white shadow-gray-200" : "text-white  shadow-[#1d1d1f]"
        } shadow-md my-1  w-full flex items-center`}
        onClick={() => {
          set_id([id, type]);
          setdisplay(false);
          document.getElementById("search").value = "";
        }}
      >
        <img
          className="w-[80px] h-full object-contain object-center m-2"
          src={
            image == undefined || image == null
              ? movieimage
              : `https://image.tmdb.org/t/p/w500${image}`
          }
          alt={"ter"}
        />
        <div>
          <h1 className="text-[0.8rem] ">{title}</h1>
          <p className="text-[0.8rem] font-medium">{type}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1
        className={`${
          light ? "text-[#1b1b1f]" : "text-white"
        } tracking-[20px] font-bold  text-center pt-10 pb-10 uppercase text-[2.2rem]`}
      >
        Movie Land
      </h1>

      <div className="w-[80vw] absolute z-50 top-[10rem] right-[50%] translate-x-[50%] md:right-[80px] md:translate-x-0 md:w-[50vw] md:top-[150px]">
        <input
          id="search"
          className={`${
            light ? "bg-white" : "bg-[#29292e] text-white "
          } shadow-lg  m-auto block p-3 w-full outline-none focus:border-red-500 focus:ring-[2px] focus:ring-red-500`}
          type="text"
          placeholder="Search movies and tv shows"
          onChange={(e) => {
            let input = e.target.value;
            if (input === "") {
              setdisplay(false);
            } else {
              setdisplay(true);
            }

            set_name(input);
            search();
          }}
        />
        {display ? (
          <div
            className={`w-full flex flex-wrap justify-center ${
              light
                ? "bg-white"
                : "bg-[#29292e] text-white ring-[#2f2f36] ring-1"
            } py-2`}
          >
            {data.map((item, i) => {
              if (i < 5) {
                return (
                  <Card
                    title={item.title || item.name}
                    image={item.profile_path || item.poster_path}
                    type={item.media_type}
                    year={item.release_date}
                    key={item.id}
                    id={item.id}
                  />
                );
              }
            })}
          </div>
        ) : null}
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useTheme } from "../Config";

export const Videos = ({ id }) => {
  const light = useTheme();
  const [data, set_data] = useState([]);
  const [size, setSize] = useState(window.innerWidth);
  const url = `https://api.themoviedb.org/3/${id[1]}/${id[0]}/videos?language=en-US`;
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

  window.addEventListener("resize", () => {
    setSize(window.innerWidth);
  });

  const get_Trailer = () => {
    if (data !== undefined) {
      if (data.length > 1) {
        const trailer = data.find((i) => i.type === "Trailer");
        return (
          <div>
            <h1
              className={`text-center text-[2rem] p-2 font-bold ${
                light ? "" : "text-white"
              }`}
            >
              The Trailer
            </h1>
            <iframe
              title="update"
              width={size * 0.9}
              height={(size * 8.1) / 16}
              src={`https://www.youtube.com/embed/${trailer.key}`}
            ></iframe>
          </div>
        );
      }
    }
  };

  get_Trailer();

  return <div className="flex justify-center">{get_Trailer()}</div>;
};

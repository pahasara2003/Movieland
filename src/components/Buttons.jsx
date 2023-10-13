import React from "react";
import { useTheme, useSetTheme } from "../Config";
import { Link } from "react-router-dom";

const Buttons = () => {
  const light = useTheme();
  const setTheme = useSetTheme();
  return (
    <div className="fixed gap-3 right-10 bottom-10 z-50 flex flex-col mr-3">
      <Link
        to={`/movieland`}
        className={`w-[3.5rem] flex items-center justify-center  h-[3.5rem] ${
          light ? "text-gray-100 bg-gray-900" : "bg-gray-100 text-gray-900"
        } rounded-full shadow-md  ring-gray-500  text-center `}
      >
        <i className="fa-solid fa-house text-[1.2rem] p-0"></i>
      </Link>
      <button
        className={`w-[3.5rem]  h-[3.5rem] ${
          light ? "text-gray-100 bg-gray-900" : "bg-gray-100 text-gray-900"
        } rounded-full shadow-md  ring-gray-500  text-center `}
        onClick={() => {
          setTheme();
        }}
      >
        {light ? (
          <i className="fa-solid fa-sun text-[1.2rem]"></i>
        ) : (
          <i className="fa-solid fa-moon text-[1.2rem]"></i>
        )}
      </button>
    </div>
  );
};

export default Buttons;

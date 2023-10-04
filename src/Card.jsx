import React from "react";

export const Card = ({ title, image }) => {
  return (
    <div className="ring-gray-200 ring-1 h-[70px]  w-full flex items-center">
      <img
        className="w-[10%] h-full object-cover object-top m-2"
        src={image}
        alt={{ image } + "poster"}
      />
      <div>
        <h1 className="">{title}</h1>
        {/* <p>{overview}</p> */}
      </div>
    </div>
  );
};

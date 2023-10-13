import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Four04 = () => {
  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      nav("/movieland/");
    }, 3000);
  }, []);
  return (
    <div className="h-[85vh] flex justify-center items-center w-full flex-col">
      <h1 className="text-red-500 text-[6rem] font-bold">404</h1>
      <br />
      <h1 className="text-red-500 text-[3rem] font-bold">Page not found 😬</h1>
    </div>
  );
};

export default Four04;

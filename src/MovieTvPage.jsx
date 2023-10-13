import React from "react";
import { Episodes } from "./components/Episodes";
import { Recommands } from "./components/Recommands";
import { Videos } from "./components/Videos";
import { DetailsPanel } from "./components/DetailsPanel";
import { useTheme } from "./Config";
import { useLocation } from "react-router-dom";
import Four04 from "./Four04";

const MovieTvPage = () => {
  const location = useLocation();
  const light = useTheme();
  const id = location.state;

  return (
    <>
      {id !== null ? (
        <>
          <DetailsPanel id={id} />
          <Videos id={id} />
          {id[1] === "tv" ? <Episodes id={id} light={light} /> : null}
          <Recommands id={id} light={light} />
        </>
      ) : (
        <Four04 />
      )}
    </>
  );
};

export default MovieTvPage;

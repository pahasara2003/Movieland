import React, { createContext, useContext, useState } from "react";
import Searchbar from "./components/Searchbar";

const ThemeContext = React.createContext();
const SetThemeContext = React.createContext();

const IDContext = createContext();
const SetIDContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useSetTheme = () => {
  return useContext(SetThemeContext);
};

export const useID = () => {
  return useContext(IDContext);
};

export const useSetID = () => {
  return useContext(SetIDContext);
};

const Config = ({ children }) => {
  const [id, set_id] = useState([1396, "tv"]);
  const [light, setTheme] = useState(true);
  function setmood() {
    setTheme((prev) => !prev);
  }

  return (
    <SetIDContext.Provider value={set_id}>
      <IDContext.Provider value={id}>
        <SetThemeContext.Provider value={setmood}>
          <ThemeContext.Provider value={light}>
            <div
              className={`${
                light ? "bg-[#f2f2f2]" : "bg-[#1b1b1f]"
              } flex flex-col items-center h-full`}
            >
              <Searchbar />
              {children}
              <div className="text-center bg-[#0f0f0f] p-5 text-lg mt-10 w-full text-white">
                &copy; Pahasara Wickramasinghe
              </div>
            </div>
          </ThemeContext.Provider>
        </SetThemeContext.Provider>
      </IDContext.Provider>
    </SetIDContext.Provider>
  );
};

export default Config;

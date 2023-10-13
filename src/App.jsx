import { ProfilePage } from "./ProfilePage";
import "../src/fontawesome-free-6.4.0-web/css/all.css";
import { Route, Routes } from "react-router-dom";
import Config from "./Config.jsx";
import MovieTvPage from "./MovieTvPage";
import HomePage from "./HomePage";
import Four04 from "./Four04";

export default function App() {
  return (
    <Config>
      <Routes>
        <Route path="/movieland/" element={<HomePage />} />
        <Route path="/movieland/movie/:name" element={<MovieTvPage />} />
        <Route path="/movieland/tv/:name" element={<MovieTvPage />} />
        <Route path="/movieland/person/:name" element={<ProfilePage />} />
        <Route path="/movieland/*" element={<Four04 />} />
        <Route path="/movieland/:type/*" element={<Four04 />} />
      </Routes>
    </Config>
  );
}

import { useID } from "./Config";
import { MoviePanel } from "./components/MoviePanel";

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

export default function HomePage() {
  const id = useID();
  return (
    <div className="flex flex-col items-center">
      <MoviePanel
        title={"Movies"}
        urls={url_movie}
        options={options_movie}
        type={"movie"}
      />
      <MoviePanel
        title={"TV series"}
        urls={url_tv}
        options={options_tv}
        type={"tv"}
      />
    </div>
  );
}

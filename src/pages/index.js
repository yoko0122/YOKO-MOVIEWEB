import { Header } from "@/component/Header";
import { Footer } from "@/component/Footer";
import { MovieCaruosel } from "@/component/MovieCaruosel";
import { MovieCardsView } from "@/component/MovieCardsView";
import { useEffect, useState } from "react";
export default function Home() {
  const [NowPLayingMovie, setNowPlayingMovie] = useState([]);

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/now_playing?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();
      console.log(movies);
      setNowPlayingMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <Header />
      <MovieCaruosel NowPLayingMovie={NowPLayingMovie} />
      <MovieCardsView NowPLayingMovie={NowPLayingMovie} />
      <Footer />
    </div>
  );
}

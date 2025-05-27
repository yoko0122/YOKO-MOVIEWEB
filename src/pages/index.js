import { Header } from "@/component/Header";
import { Footer } from "@/component/Footer";
import { MovieCaruosel } from "@/component/MovieCaruosel";
import { MovieCardsView } from "@/component/MovieCardsView";
import { useEffect, useState } from "react";
export default function Home() {
  const [NowPLayingMovie, setNowPlayingMovie] = useState([]);
  const [upComingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  // carousel
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
      setNowPlayingMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  //

  // upcoming
  const getupComingMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/upcoming?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();
      setUpcomingMovies(movies.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getupComingMovies();
  }, []);
  //

  // Popular
  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular?language=en-US&page=1`,
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
      setPopularMovies(movies.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
  //

  // TopRated
  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/top_rated?language=en-US&page=1`,
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
      setTopRatedMovies(movies.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
  //

  return (
    <div className="flex flex-col gap-8">
      <MovieCaruosel NowPLayingMovie={NowPLayingMovie} />
      <MovieCardsView
        upComingMovies={upComingMovies}
        popularMovies={popularMovies}
        topRatedMovies={topRatedMovies}
      />
    </div>
  );
}

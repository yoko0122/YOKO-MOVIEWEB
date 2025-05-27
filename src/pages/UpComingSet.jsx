import { MovieCard } from "@/component/MovieCard";
import { useEffect, useState } from "react";
const UpComingSet = () => {
  const [upComing, setUpcomingMovies] = useState([]);
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
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 max-w-[1324px] ">
        <div className="flex justify-between">
          <h1 className="text-[24px]">Upcoming</h1>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-8">
          {upComing?.map((movies) => (
            <MovieCard key={movies.id} upComing={movies} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default UpComingSet;

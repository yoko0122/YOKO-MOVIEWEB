import { MovieCard } from "@/component/MovieCard";
import { AllGenres } from "./Allgenres";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { genreMovieById } from "../../../utils/GenreMOvieById";

const Page = () => {
  const [genreMovies, setGenreMovie] = useState([]);
  const router = useRouter();
  const genreIds = router.query.p;

  useEffect(() => {
    const getGenreMovie = async () => {
      const data = await genreMovieById(genreIds);

      setGenreMovie(data.results);
    };

    getGenreMovie();
  }, [genreIds]);

  return (
    <div className="flex flex-col gap-8 mx-auto p-10">
      <h1>Search filter</h1>
      <div className="flex justify-between">
        <div className="w-[387px]">
          <AllGenres />
        </div>
        <div className="max-w-[504px] grid grid-cols-2 gap-2">
          {genreMovies?.map((genre) => (
            <MovieCard movies={genre} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Page;

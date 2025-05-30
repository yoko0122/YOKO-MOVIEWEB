import { MovieCard } from "@/component/MovieCard";
import { AllGenres } from "./Allgenres";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { genreMovieById } from "../../../utils/GenreMovieById";

const Page = () => {
  const [genreMovies, setGenreMovie] = useState([]);
  const router = useRouter();
  const genreIds = router.query.genreIds;

  useEffect(() => {
    const getGenreMovie = async () => {
      const data = await genreMovieById(genreIds);

      setGenreMovie(data.results);
    };

    getGenreMovie();
  }, [genreIds]);

  return (
    <div className="flex flex-col gap-8  p-10">
      <h1>Search filter</h1>
      <div className="md:flex md:justify-between">
        <div className="">
          <AllGenres />
        </div>
        <div className="md:max-w-[904px]  grid grid-cols-2 md:grid-cols-4 gap-2">
          {genreMovies?.map((genre) => (
            <MovieCard movies={genre} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Page;

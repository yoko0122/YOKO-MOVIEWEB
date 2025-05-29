import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { MovieCard } from "@/component/MovieCard";
import { DropDownMovies } from "./DropDownMovies";

export const AllGenres = () => {
  const router = useRouter();
  const [genres, setGenres] = useState([]);
  const [genreIds, setGenreIds] = useState([]);
  const getMovieGenres = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}genre/movie/list?language=en`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const movies = await response.json();
      setGenres(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieGenres();
  }, []);

  const handleSelectGenre = (id, name) => {
    setGenreIds([...genreIds, id]);

    router.push(`/genre/genre?p=${genreIds}&name=${name}`);
  };
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {genres?.genres?.map((genre) => (
          <Button
            className="w-fit bg-white text-foreground hover:bg-none text-[12px] font-bold"
            onClick={() => handleSelectGenre(genre.id, genre.name)}
          >
            {genre.name}
          </Button>
        ))}
      </div>
      <DropDownMovies genreIds={genreIds} />
    </div>
  );
};

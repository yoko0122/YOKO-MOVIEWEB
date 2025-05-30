import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

  const genreSelect = (id, name) => {
    setGenreIds([...genreIds, id]);

    router.push(`/genre/genre?genreIds=${genreIds}&name=${name}`);
  };

  return (
    <div className="grid grid-cols-3 gap-4 md:gap-9">
      {genres?.genres?.map((genre) => {
        const isSelected = genreIds?.includes(String(genre.id));
        console.log(isSelected);
        return (
          <div
            className={`text-foreground  text-[12px] font-bold  ${
              isSelected ? "bg-black" : "bg-white"
            }"`}
            onClick={() => genreSelect(genre.id, genre.name)}
          >
            {genre.name}
          </div>
        );
      })}
    </div>
  );
};

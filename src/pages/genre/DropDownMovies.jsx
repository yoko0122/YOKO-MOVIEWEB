import { MovieCard } from "@/component/MovieCard";
import { Button } from "@/components/ui/button";

export const DropDownMovies = ({ genreIds }) => {
  console.log(genreIds);
  return (
    <div className="grid grid-cols-3 gap-4">
      {genreIds?.genreIds?.map((genre) => (
        <MovieCard movies={genre} />
      ))}
    </div>
  );
};

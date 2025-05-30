import { MovieCard } from "@/component/MovieCard";

export const DropDownMovies = ({ genreIds }) => {
  console.log(genreIds);
  return (
    <div className="grid grid-cols-4 gap-4">
      {genreIds?.genreIds?.map((genre) => (
        <MovieCard movies={genre} />
      ))}
    </div>
  );
};

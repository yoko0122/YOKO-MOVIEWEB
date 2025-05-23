import { ArrowBigRight } from "lucide-react";
import { MovieCard } from "./MovieCard";

export const TopRated = ({ toprated }) => {
  return (
    <div className="flex flex-col gap-4  ">
      <div className="flex justify-between">
        <h1 className="text-[24px]">TopRated</h1>
        <button className="flex gap-1">
          See More <ArrowBigRight />
        </button>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-5 gap-8">
        {toprated?.map((movies) => (
          <MovieCard key={movies.id} topRated={movies} />
        ))}
      </div>
    </div>
  );
};

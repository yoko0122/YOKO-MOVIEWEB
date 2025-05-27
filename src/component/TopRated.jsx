import { ArrowBigRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import Link from "next/link";

export const TopRated = ({ toprated }) => {
  return (
    <div className="flex flex-col gap-4  ">
      <div className="flex justify-between">
        <h1 className="text-[24px]">TopRated</h1>
        <Link href="/TopRatedSet">
          <button className="flex gap-1">
            See More <ArrowBigRight />
          </button>
        </Link>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-5 gap-8">
        {toprated?.slice(0, 10).map((movies) => (
          <MovieCard key={movies.id} topRated={movies} />
        ))}
      </div>
    </div>
  );
};

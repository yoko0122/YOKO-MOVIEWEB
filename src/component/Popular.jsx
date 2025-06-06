import { ArrowBigRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import Link from "next/link";

export const Popular = ({ popular }) => {
  // console.log(popular);
  return (
    <div className="flex flex-col gap-4  ">
      <div className="flex justify-between">
        <h1 className="text-[24px]">Popular</h1>
        <Link href="/PopularSet">
          <button className="flex gap-1">
            See More <ArrowBigRight />
          </button>
        </Link>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-5 gap-8">
        {popular?.slice(0, 10).map((movies) => (
          <MovieCard key={movies.id} movies={movies} />
        ))}
      </div>
    </div>
  );
};

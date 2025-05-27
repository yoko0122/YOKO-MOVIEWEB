import { ArrowBigRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import Link from "next/link";

export const UpComing = ({ upcoming }) => {
  return (
    <div className="flex flex-col gap-4  ">
      <div className="flex justify-between">
        <h1 className="text-[24px]">UpComing</h1>
        <Link href="/UpComingSet">
          <button className="flex gap-1">
            See More <ArrowBigRight />
          </button>
        </Link>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-5 gap-8">
        {upcoming?.slice(0, 10).map((movies) => (
          <MovieCard key={movies.id} upComing={movies} />
        ))}
      </div>
    </div>
  );
};

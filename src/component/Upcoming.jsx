import { ArrowBigRight } from "lucide-react";
import { MovieCard } from "./MovieCard";

export const UpComing = () => {
  return (
    <div className="flex flex-col gap-4  ">
      <div className="flex justify-between">
        <h1 className="text-[24px]">UpComing</h1>
        <ArrowBigRight />
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-5 gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <MovieCard />
        ))}
      </div>
    </div>
  );
};

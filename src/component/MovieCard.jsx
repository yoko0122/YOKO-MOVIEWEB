import { Star } from "lucide-react";
import Link from "next/link";

export const MovieCard = ({ movies }) => {
  console.log(movies);
  const upComes = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original${movies?.poster_path}`;
  return (
    <div>
      <div className=" bg-secondary border-1 rounded-2xl flex flex-col justify-center w-full ">
        <Link href={`/details/${movies?.id}`}>
          <img src={upComes} className="  md:h-[pull] rounded-t-2xl" />
        </Link>
        <div>
          <div className="flex flex-col gap-2 md:gap-4 md:pl-4 ">
            <div className="flex gap-1 pt-2 ">
              <div>
                <Star className="text-yellow-300 fill-amber-300" />
              </div>
              <div>{movies?.vote_average}</div>
            </div>
            <div className="h-[auto]  w-full flex pb-2"> {movies?.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

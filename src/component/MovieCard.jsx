import { Star } from "lucide-react";
 const upComes = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/origin/movie/upcoming?language=en-US&page=1`;
export const MovieCard = (movie) => {
  return (
    <div>
      <div className=" bg-secondary border-1 rounded-2xl flex flex-col justify-center w-full ">
        <img src={upComes} className="  md:h-[pull] rounded-t-2xl" />
        <div>
          <div className="flex flex-col gap-2 md:gap-4  md:pl-4 ">
            <div className="flex gap-1 pt-2 ">
              <div>
                <Star className="text-yellow-300 fill-amber-300" />
              </div>
              <div>{12}</div>
            </div>
            <div className="h-[auto] w-full flex pb-2"> {movie.page}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

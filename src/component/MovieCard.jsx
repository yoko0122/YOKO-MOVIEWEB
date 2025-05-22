import { Star } from "lucide-react";

export const MovieCard = ({ upComing, Popular, topRated }) => {
  const upComes = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original${
    upComing?.poster_path || Popular?.poster_path || topRated?.poster_path
  }`;
  console.log();
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
              <div>
                {upComing?.vote_average}
                {Popular?.vote_average}
                {topRated?.title}
              </div>
            </div>
            <div className="h-[auto] w-full flex pb-2">
              {" "}
              {upComing?.title}
              {Popular?.title}
              {topRated?.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

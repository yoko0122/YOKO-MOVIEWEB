import UpComingSet from "@/pages/UpComingSet";
import { Popular } from "./Popular";
import { TopRated } from "./TopRated";
import { UpComing } from "./Upcoming";

export const MovieCardsView = ({
  upComingMovies,
  popularMovies,
  topRatedMovies,
}) => {
  console.log(upComingMovies);
  return (
    <div className="justify-center flex">
      <div className=" flex flex-col md:max-w-[1330px] justify-center  gap-16 p-6">
        <div>
          <UpComing upcoming={upComingMovies} />
        </div>
        <div>
          <Popular popular={popularMovies} />
        </div>
        <div>
          <TopRated toprated={topRatedMovies} />
        </div>
      </div>
    </div>
  );
};

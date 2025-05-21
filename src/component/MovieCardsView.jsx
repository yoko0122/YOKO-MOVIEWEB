import { Popular } from "./Popular";
import { TopRated } from "./TopRated";
import { UpComing } from "./Upcoming";

export const MovieCardsView = ({upComingMovies}) => {
  return (
    <div className=" justify-center grid gap-15 p-6">
      <div>
        <UpComing upcoming={upComingMovies} />
      </div>
      <div>
        <Popular />
      </div>
      <div>
        <TopRated />
      </div>
    </div>
  );
};

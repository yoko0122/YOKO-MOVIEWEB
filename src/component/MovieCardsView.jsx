import { Popular } from "./Popular";
import { TopRated } from "./TopRated";
import { UpComing } from "./Upcoming";

export const MovieCardsView = () => {
  return (
    <div className=" justify-center grid gap-15 p-6">
      <div>
        <UpComing />
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

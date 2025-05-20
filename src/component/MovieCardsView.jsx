import { Popular } from "./Popular";
import { TopRated } from "./TopRated";
import { UpComing } from "./Upcoming";

export const MovieCardsView = () => {
  return (
    <div className="grid gap-15">
      <div className="flex justify-center">
        <UpComing />
      </div>
      <div className="flex justify-center">
        <Popular />
      </div>
      <div className="flex justify-center">
        <TopRated />
      </div>
    </div>
  );
};

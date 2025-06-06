import { AllGenres } from "../genre/Allgenres";
import { SearchInput } from "./SearchInput";
import { SearchMovieCard } from "./SearchMovieCard";

export default function SearchHomePage() {
  return (
    <div className="flex justify-between p-10">
      <div>
        <SearchInput />
      </div>
      <div>
        <AllGenres />
      </div>
    </div>
  );
}

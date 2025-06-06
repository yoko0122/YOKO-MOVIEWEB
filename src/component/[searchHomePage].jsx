import { AllGenres } from "../pages/Genre/Allgenres";
import { SearchInput } from "./SearchInput";
import SearchMovieCard from "@/component/SearchMovieCard";

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

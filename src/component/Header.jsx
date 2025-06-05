import { Search } from "lucide-react";
import { Clapperboard } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";
import { HeaderGenre } from "@/pages/genre/HeaderGenre";
import Link from "next/link";
import { SearchInput } from "../pages/search/SearchInput";

export const Header = () => {
  return (
    <div className="pt-6 pl-3 pr-3 flex gap-3 justify-between">
      <div className="flex gap-1.5 pl-10 pr-10">
        <Clapperboard />
        <Link href={`/`}>Movie Z</Link>
      </div>
      <div className=" hidden md:flex md:gap-2">
        <HeaderGenre />
        <button className="w-[36px] h-[36px] rounded-md border-1">
          <Search className="pl-2" />
        </button>
        <div className="w-[397px] h-[36px] rounded-lg border-1">
          <SearchInput />
        </div>
      </div>
      <div className="h-[50px] w-[80px] gap-6 flex pt-2 ">
        <div className="w-[36px] h-[36px] rounded-md border-1 pt-1">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

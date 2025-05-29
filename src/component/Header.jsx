import { Search } from "lucide-react";
import { Clapperboard } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";
import { HeaderGenre } from "@/pages/genre/HeaderGenre";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="pt-6 pl-3 pr-3 flex gap-3 justify-between">
      <div className="flex gap-1.5">
        <Clapperboard />
        <Link href={`/`}>Movie Z</Link>
      </div>
      <div className=" hidden md:flex md:gap-2">
        <HeaderGenre />
        {/*  */}
        <div className="w-[397px] h-[36px] rounded-lg border-1">
          <form class="max-w-md mx-auto">
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-2 ps-10 text-sm "
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
          </form>
        </div>
        {/*  */}
      </div>
      <div className="h-[50px] w-[80px] gap-6 flex pt-2 ">
        <button className="w-[36px] h-[36px] rounded-md border-1">
          <Search />
        </button>
        <div className="w-[36px] h-[36px] rounded-md border-1 pt-1">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

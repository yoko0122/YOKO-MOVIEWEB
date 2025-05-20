
import { Search } from "lucide-react";
import { Clapperboard } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";



export const Header = () => {
  return (
    <div className="pt-6 pl-3 pr-9 flex gap-3 justify-between">
      <div className="flex gap-1.5">
        <button>
          <Clapperboard />
        </button>
        <div className="pt-4">Movie Z</div>
      </div>

      <div className="flex gap-2">
        {/*  */}
        <div class="relative group inline-block text-left">
          <button class=" font-medium rounded-lg text-sm px-5 h-[36px] text-center inline-flex items-center border-1">
            Dropdown hover
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          <div class="absolute left-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-500 dark:bg-gray-700">
            <ul class="py-2 text-sm ">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div>
        </div>

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
        <button className="w-[36px] h-[36px] rounded-md border-1 pt-1">
          <DarkModeToggle />
        </button>
      </div>
    </div>
  );
};

import { Moon } from "lucide-react";
import { Search } from "lucide-react";
import { Clapperboard } from "lucide-react";

export const Header = () => {
  return (
    <div className="pt-6 pl-3 pr-9 flex gap-3 justify-between">
      <div className="flex gap-1.5">
        <button>
          <Clapperboard />
        </button>
        <div className="pt-4">Movie Z</div>
      </div>
      <div className=" hidden md:flex sm:gap-2 ">
        <div>
          <button
            className="border-1 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center"
            type="button"
          >
            Dropdown hover{" "}
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownDelay"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDelayButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          {/*  */}
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
      <div className="h-[50px] w-[60px] gap-6 flex pt-2">
        <button className="w-[36px] h-[36px] rounded-md border-1">
          <Search />
        </button>
        <button className="w-[36px] h-[36px] rounded-md border-1">
          <Moon />
        </button>
      </div>
    </div>
  );
};

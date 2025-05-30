import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { AllGenres } from "./Allgenres";

export const HeaderGenre = () => {
  return (
    <div>
      <Link href={`/genre/genreId`}>
        <DropdownMenu className="flex">
          <DropdownMenuTrigger asChild>
            <Button variant="outline">genre</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col justify-center z-99 gap-4">
            <div className="flex flex-col gap-4 rounded-md p-6 border-1 bg-gray-100">
              <p className="text-[24px] font-black">Genres</p>
              <p className="text-[16px]">See lists of movies by genre</p>
              <AllGenres />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </Link>
    </div>
  );
};

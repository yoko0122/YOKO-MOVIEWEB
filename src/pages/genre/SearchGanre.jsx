import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const SearchGanre = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>Search By Genre</div>
      <div> See list of movies by genre</div>
      <div className="grid grid-cols-3 gap-6 md:max-w-[387px]">
        <Button variant="outline" className="rounded-full h-[25px] ">
          Action
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Adventure
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Animation
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Biography
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Comedy
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Crime
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Documentary
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Drama
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Family
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Fantasy
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Film-Noir
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Game-Show
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          History
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Horror
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Music
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Musical
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Mystery
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          News
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Reality-TV
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Romance
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Sci-Fi
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Short
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Sport
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Talk-shiow <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Thriller
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          War
          <ChevronRight className="w-1 h-2" />
        </Button>

        <Button variant="outline" className="rounded-full h-[25px]">
          Western
          <ChevronRight className="w-1 h-2" />
        </Button>
      </div>
    </div>
  );
};

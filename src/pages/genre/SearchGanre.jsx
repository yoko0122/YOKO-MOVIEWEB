import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const SearchGanre = ({ genre }) => {
  return (

    <div>
      <Button variant="outline" className="rounded-full grid-cols-4 h-[25px] ">
        {genre?.name}
        <ChevronRight className="w-1 h-2" />
      </Button>
    </div>

  );
};

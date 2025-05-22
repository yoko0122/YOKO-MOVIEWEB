import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieCaruoselItem } from "./MovieCaruoselItem";
import Autoplay from "embla-carousel-autoplay";
import { Details } from "./Details";

export const MovieCaruosel = ({ NowPLayingMovie }) => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <Carousel
          className="relative"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {NowPLayingMovie?.slice(0, 5).map((movie, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <MovieCaruoselItem movie={movie} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-15" />
          <CarouselNext className="mr-15" />
        </Carousel>
      </div>
    </div>
  );
};

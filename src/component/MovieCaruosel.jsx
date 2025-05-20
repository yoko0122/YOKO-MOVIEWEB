import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieCaruoselItem } from "./MovieCaruoselItem";
import Autoplay from "embla-carousel-autoplay";
export const MovieCaruosel = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        ></Carousel>{" "}
        <Carousel className=" relative">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <MovieCaruoselItem />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={"ml-15 "} />
          <CarouselNext className={"mr-15"} />
        </Carousel>
      </div>
    </div>
  );
};

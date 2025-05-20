import { Star } from "lucide-react";

export const MovieCard = () => {
  return (
    <div>
      <div className="max-w-[1277px] 2x1:w-full flex flex-col justify-center w-full ">
        <img
          src="./end.png"
          className=" w-[300px] md:h-[full] md:w-[390px] rounded-t-2xl"
        />
        <div>
          <div className="flex flex-col gap-2 md:gap-4 bg-secondary md:bg-secondary h-[auto] md:h-[135px] md:pl-4 border-1 rounded-b-2xl">
            <div className="flex gap-1 pt-2 ">
              <div>
                <Star />
              </div>
              <div>{12}</div>
            </div>
            <div className="h-[40px] w-full flex"> How to train your dragom </div>
          </div>
        </div>
      </div>
    </div>
  );
};

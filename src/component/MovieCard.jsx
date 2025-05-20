import { Star } from "lucide-react";

export const MovieCard = () => {
  return (
    <div>
      <div className="max-w-[1277px] flex flex-col justify-center w-full ">
        <img
          src="./end.png"
          className=" h-[234px] md:h-[340px] md:w-[230px] rounded-t-2xl"
        />
        <div>
          <div className="bg-secondary h-[76px] md:h-[95px] md:pl-2 border-1 rounded-b-2xl">
            <div className="flex gap-1 pt-2 ">
              <div>
                <Star />
              </div>
              <div>{12}</div>
            </div>
            <div className="h-[40px]"> how to train your dragon </div>
          </div>
        </div>
      </div>
    </div>
  );
};

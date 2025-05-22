import { Play } from "lucide-react";

export const Details = ({ movie }) => {
  console.log(movie);
  const imageUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original${movie?.backdrop_path}`;
  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
      <img
        src={imageUrl}
        alt={"Movie Image"}
        className="w-[1440px] h-[600px] md:w-full md:h-full object-cover object-center"
      />
      <div className="absolute top-0 w-full h-full md:pb-12 flex items-end pl-6 md:px-16">
        <button className="mt-4 items-center  px-5 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-100 transition">
          <Play />
        </button>
      </div>
    </div>
  );
};

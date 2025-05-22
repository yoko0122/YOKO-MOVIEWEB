import { Star, Play } from "lucide-react";
import Link from "next/link";

export const MovieCaruoselItem = ({ movie }) => {
  console.log(movie);
  const imageUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original${movie.backdrop_path}`;

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
      <Link href={`/details/${movie.id}`}>
        <img
          src={imageUrl}
          alt={"Movie Image"}
          className="w-[1440px] h-[600px] md:w-full md:h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute top-0 left-0 w-full h-full flex items-center px-6 md:px-16">
          <div className="text-white max-w-xl space-y-4">
            <h4 className="text-lg md:text-xl font-light">Now Playing:</h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {movie.title}
            </h1>

            <div className="flex items-center gap-2 text-lg">
              <Star className="text-yellow-300 fill-amber-300" />
              <span>{movie.vote_average}</span>
              <span className="text-gray-300 text-sm">/10</span>
            </div>

            <p className="text-sm md:text-base text-gray-200">
              {movie.overview}
            </p>

            <button className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-100 transition">
              <Play />
              Watch Trailer
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

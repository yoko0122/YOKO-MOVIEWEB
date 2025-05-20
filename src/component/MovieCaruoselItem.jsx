import { Star } from "lucide-react";
import { Play } from "lucide-react";

export const MovieCaruoselItem = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] ">
      <img
        src="./wicked.png"
        alt="Wicked Banner"
        className="w-[1440px] h-[600px] md:w-full md:h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="absolute top-0 left-0 w-full h-full flex items-center px-6 md:px-16">
        <div className="text-white max-w-xl space-y-4">
          <h4 className="text-lg md:text-xl font-light">Now Playing:</h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Wicked</h1>

          <div className="flex items-center gap-2 text-lg">
            <Star />
            <span>6.9</span>
            <span className="text-gray-300 text-sm">/10</span>
          </div>

          <p className="text-sm md:text-base text-gray-200">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </p>

          <button className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-100 transition">
            <Play />
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};


import { useEffect, useState } from "react";
import { SearchGanre } from "./SearchGanre";
import { GetGenreById } from "../../../utils/GetgenreById";
const Page = () => {
  const [movieGenre, setMovieGenre] = useState([]);

  useEffect(() => {
    const getMovieGenre = async () => {
      const data = await GetGenreById();
      console.log(data);
      setMovieGenre(data);
    };
    getMovieGenre();
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col gap-10 p-9">
        <div className="text-[25px] ">Search Filter</div>
        <div className="text-[25px] md:hidden">0 results for</div>
        <div className="border-1 md:hidden  w-full h-[95px] flex justify-center items-center rounded-[8px]">
          <div>no results fount</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 max-w-[535px]">
        {movieGenre.genres?.map((genre) => (
          <SearchGanre genre={genre} key={genre.id} />
        ))}
      </div>
    </div>
  );
}

export default Page

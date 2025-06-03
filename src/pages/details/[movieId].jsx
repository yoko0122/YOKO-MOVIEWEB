import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetMovieByid } from "../../../utils/GetMovieById";
import { DetailsHomePage } from "./DetailsHomePage";
import { MovieCardsView } from "@/component/MovieCardsView";
import { MoreLikeThis } from "./MoreLikeThis";
import { TeamId } from "./TeamId";
import { MovieTeam } from "./MovieTeam";
import { useQueryState } from "nuqs";

export default function Page() {
  const router = useRouter();
  const movieId = router.query.movieId;

  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      const data = await GetMovieByid(movieId);
      setMovie(data);
    };
    getMovie();
  }, [movieId]);
  //
  return (
    <div className=" flex flex-col items-center">
      <div className="md:max-w-[1648px] flex flex-col gap-6">
        <DetailsHomePage movies={movie} />
        <MovieTeam />
        <MoreLikeThis />
      </div>
    </div>
  );
}

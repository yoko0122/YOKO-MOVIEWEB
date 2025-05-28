import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetMovieByid } from "../../../utils/GetMovieById";
import { DetailsHomePage } from "./DetailsHomePage";
import { MovieCardsView } from "@/component/MovieCardsView";
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
    <div>
      <DetailsHomePage movies={movie} />
      <MovieCardsView />
    </div>
  );
}

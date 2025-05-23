import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetMovieByid } from "../../../utils/GetMovieById";
import { Header } from "@/component/Header";
import { Footer } from "@/component/Footer";
import { DetailsHomePage } from "./DetailsHomePage";
import { MovieCardsView } from "@/component/MovieCardsView";
import { UpComing } from "@/component/Upcoming";

export default function Page() {
  const router = useRouter();
  const movieId = router.query.movieId;
  const id = router.query.movieId;
  const movieCard = router.query.movieId;
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
  const [upComing, setUpcoming] = useState({});
  useEffect(() => {
    if (!id) return;
    const getId = async () => {
      const data = await id(id);
      setUpcoming(data);
    };
    setUpcoming();
  }, [id]);
  console.log(upComing);
  //
  return (
    <div>
      <Header />
      <DetailsHomePage movies={movie} />
      <MovieCardsView movieCard={movieCard} />
      <Footer />
    </div>
  );
}

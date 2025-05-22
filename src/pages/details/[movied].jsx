import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getMovieByid } from "../../../utils/GetMovieById";
import { Header } from "@/component/Header";
import { Footer } from "@/component/Footer";
import { Details } from "@/component/Details";

export default function Page() {
  const router = useRouter();
  const movieId = router.query.movieId;
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const data = await getMovieByid(movieId);
    setMovie(data);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {/* <Header /> */}
      <Details />
      {/* <Footer /> */}
    </div>
  );
}

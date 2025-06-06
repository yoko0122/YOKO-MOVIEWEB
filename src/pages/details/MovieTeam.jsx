import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getMovieteam } from "../../../utils/GetMovieteam";
import { TeamId } from "./TeamId";
import { TeamLoading } from "@/component/TeamLoading";

const MovieTeam = () => {
  const [loading, setLoading] = useState(false);
  const [movieTeam, setMovieTeam] = useState({});
  const router = useRouter();
  const team = router.query.movieId;
  console.log(team);
  useEffect(() => {
    setLoading(true);
    if (!team) return;

    const getmovie = async () => {
      try {
        const data = await getMovieteam(team);
        setMovieTeam(data);
      } catch (error) {
        console.error(error);
      }
    };
    setLoading(false);
    getmovie();
  }, [team]);
  console.log(movieTeam);
  const directors = movieTeam.crew?.filter(
    (director) => director.known_for_department === "Directing"
  );

  const writers = movieTeam.crew?.filter(
    (writer) => writer.known_for_department === "Writing"
  );

  const stars = movieTeam.cast?.filter(
    (star) => star.known_for_department === "Acting"
  );

  return (
    <div>
      {loading && <TeamLoading />}
      <TeamId directors={directors} writers={writers} stars={stars} />
    </div>
  );
};

export default MovieTeam;

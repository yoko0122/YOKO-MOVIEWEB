import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getMovieteam } from "../../../utils/GetMovieteam";
import { TeamId } from "./TeamId";

export const MovieTeam = () => {
  const [movieTeam, setMovieTeam] = useState({});
  const router = useRouter();
  const team = router.query.movieId;
  console.log(team);
  useEffect(() => {
    if (!team) return;

    const getmovie = async () => {
      try {
        const data = await getMovieteam(team);
        setMovieTeam(data);
      } catch (error) {
        console.error(error);
      }
    };

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
      <TeamId directors={directors} writers={writers} stars={stars} />
    </div>
  );
};

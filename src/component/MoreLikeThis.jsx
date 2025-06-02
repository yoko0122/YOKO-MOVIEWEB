import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getMoreLike } from "../../utils/GetMoreLike";
import { MovieCard } from "./MovieCard";

export const MoreLikeThis = () => {
  const [moreLike, setMoreLike] = useState([]);
  const router = useRouter();
  const movieId = router.query.movieId;
  console.log(movieId);
  useEffect(() => {
    const getMore = async () => {
      const data = await getMoreLike(movieId);
      setMoreLike(data.results);
    };

    getMore(movieId);
  }, []);
  return (
    <div>
      <MovieCard movies={moreLike} />
    </div>
  );
};

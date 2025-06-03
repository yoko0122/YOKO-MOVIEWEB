import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { MovieCard } from "../../component/MovieCard";
import { getMoreLike } from "../../../utils/GetMoreLike";

export const MoreLikeThis = () => {
  const [moreLike, setMoreLike] = useState([]);
  const router = useRouter();
  const id = router.query.movieId;

  useEffect(() => {
    if (!id) return;

    const getMore = async () => {
      try {
        const data = await getMoreLike(id);
        setMoreLike(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getMore();
  }, [id]);

  return (
    <div className="flex justify-center">
      <div className="md:max-w-[1204px] p-6 grid grid-cols-2 md:grid-cols-4 gap-2">
        {moreLike?.slice(0, 8)?.map((like) => (
          <MovieCard movies={like} />
        ))}
      </div>
    </div>
  );
};

import { MovieCard } from "@/component/MovieCard";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { parseAsInteger, useQueryState } from "nuqs";

const UpComingSet = () => {
  const [upComing, setUpcomingMovies] = useState([]);
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getupComingMovies = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/upcoming?language=en-US&page=${page}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        setUpcomingMovies(data?.results || []);
        setTotalPage(data?.total_pages || 0);
      } catch (error) {
        console.error(error);
      }
    };

    getupComingMovies();
  }, [page]);

  const previous = () => {
    if (page > 1) setPage(page - 1);
  };

  const selectPage = (pageNumber) => {
    setPage(pageNumber);
  };

  const nextPage = () => {
    if (page < totalPage) setPage(page + 1);
  };

  const paginations = new Array(totalPage)
    .fill(null)
    .map((_, index) => index + 1)
    .slice(0, 3);
  console.log(paginations);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-6 justify-center">
        <div className="flex flex-col gap-4 max-w-[1324px]">
          <div className="flex justify-between">
            <h1 className="text-[24px]">Upcoming</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {upComing.map((movie) => (
              <MovieCard key={movie.id} movies={movie} />
            ))}
          </div>
        </div>
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={previous} />
              </PaginationItem>
              {paginations.map((pageNumber) => (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    onClick={() => selectPage(pageNumber)}
                    isActive={pageNumber === page}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext onClick={nextPage} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default UpComingSet;

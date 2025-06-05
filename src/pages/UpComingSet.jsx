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
} from "@/components/ui/pagination"
import { parseAsInteger, useQueryState } from "nuqs";
const UpComingSet = () => {
  const [upComing, setUpcomingMovies] = useState([]);
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [totalPage, setTotalPage] = useState(0);
  console.log(totalPage);
  const getupComingMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/upcoming?language=en-US&${page}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const page = await response.json();
      setUpcomingMovies(page?.results);
      setTotalPage(page?.total_pages);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getupComingMovies();
  }, [page]);
  const previous = () => {
    setPage(page - 1);
  };
 
  const selectPage = (pageNumber) => {
    setPage(pageNumber);
  };
 
  const nextPage = () => {
    setPage(page + 1);
  };
  const paginations = new Array(totalPage)
    .fill(null)
    .map((_, index) => index + 1)
    .slice(0, 3);
  console.log(paginations);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-6 justify-center">
        <div className="flex flex-col gap-4 max-w-[1324px] ">
          <div className="flex justify-between">
            <h1 className="text-[24px]">Upcoming</h1>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-5 gap-8">
            {upComing?.map((movies) => (
              <MovieCard key={movies.id} movies={movies} />
            ))}
          </div>
        </div>
        <div>
          <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={previous} />
            </PaginationItem>
            {paginations?.map((pageNumber) => {
              return (
                <PaginationItem>
                  <PaginationLink onClick={() => selectPage(pageNumber)}>
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
 
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

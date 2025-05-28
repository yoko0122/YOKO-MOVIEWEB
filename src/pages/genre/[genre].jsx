import { SearchGanre } from "./SearchGanre";

export default function Ganre() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col gap-10 p-9">
        <div className="text-[25px] ">Search Filter</div>
        <div className="text-[25px] md:hidden">0 results for</div>
        <div className="border-1 md:hidden  w-full h-[95px] flex justify-center items-center rounded-[8px]">
          <div>no results fount</div>
        </div>
        <SearchGanre />
      </div>
    </div>
  );
}

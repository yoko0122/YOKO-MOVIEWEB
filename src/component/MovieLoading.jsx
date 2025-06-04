import { Skeleton } from "@/components/ui/skeleton";

export const MovieLoading = () => {
  return (
    <div className="flex justify-center gap-8">
      <div className=" flex flex-col md:max-w-[1330px] justify-center  gap-16 p-6">
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex justify-between">
            <div className="text-[24px]">
              {" "}
              <Skeleton className={"w-[135px] h-[36px]"} />
            </div>
            <div className="flex gap-1">
              <Skeleton className={"w-[97px] h-[24px]"} />
            </div>
          </div>
          <div className="flex">
            <div className=" grid grid-cols-2 md:grid-cols-5 gap-8">
              <Skeleton className={"h-[400px] w-[230px]"} />
              <Skeleton className={"h-[400px] w-[230px]"} />
              <Skeleton className={"h-[400px] w-[230px]"} />
              <Skeleton className={"h-[400px] w-[230px]"} />
              <Skeleton className={"h-[400px] w-[230px]"} />
              <Skeleton className={"h-[400px] w-[230px]"} />
              <Skeleton className={"h-[400px] w-[230px]"} />
              <Skeleton className={"h-[400px] w-[230px]"} />
              <Skeleton className={"h-[400px] w-[230px]"} />
              <Skeleton className={"h-[400px] w-[230px]"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Skeleton } from "@/components/ui/skeleton";

export const TeamLoading = () => {
  return (
    <div className="flex flex-col gap-4 border-t border-gray-700 pt-4 space-y-2">
      <div className="flex gap-12">
        <span className=" text-[20px]">
          <Skeleton className={"w-[70px] h-[30px]"} />
        </span>
        <Skeleton className={"w-[400px] h-[30px]"} />
      </div>
      <div className=" flex gap-13 border-t  border-gray-700">
        <span className=" text-[20px]">
          <Skeleton className={"w-[70px] h-[30px]"} />
        </span>
        <Skeleton className={"w-[600px] h-[30px]"} />
      </div>
      <div className="flex gap-17 border-t  border-gray-700">
        <span className=" text-[20px]">
          <Skeleton className={"w-[70px] h-[30px]"} />
        </span>
        <Skeleton className={"w-[900px] h-[30px]"} />
      </div>
    </div>
  );
};

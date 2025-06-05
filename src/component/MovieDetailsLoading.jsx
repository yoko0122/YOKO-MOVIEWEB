import { Skeleton } from "@/components/ui/skeleton";

export const MovieDetailsLoading = () => {
  return (
    <div className="flex gap-6">
      <div className=" xl:w-[500px] md:w-[]">
        <Skeleton className="h-[600px] w-auto" />
      </div>
      <div className=" xl:w-[1300px] ">
        <Skeleton className="h-[600px] w-full" />
      </div>
    </div>
  );
};

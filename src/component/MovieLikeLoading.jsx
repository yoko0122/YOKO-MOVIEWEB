import { Skeleton } from "@/components/ui/skeleton";

export const MovieLikeLoading = () => {
  return (
    <div className="grid grid-cols-4 gap-x-74 gap-6">
      <Skeleton className="h-[400px] w-[270px]" />
      <Skeleton className="h-[400px] w-[270px]" />
      <Skeleton className="h-[400px] w-[270px]" />
      <Skeleton className="h-[400px] w-[270px]" />
      <Skeleton className="h-[400px] w-[270px]" />
      <Skeleton className="h-[400px] w-[270px]" />
      <Skeleton className="h-[400px] w-[270px]" />
      <Skeleton className="h-[400px] w-[270px]" />
    </div>
  );
};

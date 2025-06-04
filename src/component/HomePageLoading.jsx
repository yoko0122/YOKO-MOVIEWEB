import { Skeleton } from "@/components/ui/skeleton";

export const HomePageLoading = () => {
  return (
    <div>
      <Skeleton className="h-[600px] md:max-w-[100%]" />
    </div>
  );
};

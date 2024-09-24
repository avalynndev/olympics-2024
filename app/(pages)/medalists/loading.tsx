import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/header";

export default function HighlightsLoading() {
  return (
    <>
      <DashboardHeader
        heading="Medalists"
        text="View the athletes who won medals."
      />
      <div className="flex flex-col gap-5">
        <Skeleton className="h-[1000px] w-full rounded-lg" />
      </div>
    </>
  );
}

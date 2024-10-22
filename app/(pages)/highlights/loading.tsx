import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/header";

export default function HighlightsLoading() {
  return (
    <>
      <DashboardHeader heading="Charts" text="List of charts by shadcn-ui." />
      <div className="flex flex-col gap-5">
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>
    </>
  );
}

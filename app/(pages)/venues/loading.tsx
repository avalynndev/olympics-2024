import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/header";

export default function VenuesLoading() {
  return (
    <>
      <DashboardHeader heading="Venues" text="List of venues for each sport from the paris 2024 olympics" />
      <div className="flex flex-col gap-5">
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>
    </>
  );
}

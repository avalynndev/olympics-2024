import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/header";

export default function EventsLoading() {
  return (
    <>
      <DashboardHeader
        heading="Events"
        text="List of events for each sport from the Paris 2024 Olympics"
      />
      <div className="flex flex-col gap-5">
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>
    </>
  );
}

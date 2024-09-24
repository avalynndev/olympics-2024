import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/header";

export default function ScheduleLoading() {
  return (
    <>
      <DashboardHeader heading="Athletes" text="View the participants in Olympics 2024" />
      <div className="flex flex-col gap-5">
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>
    </>
  );
}

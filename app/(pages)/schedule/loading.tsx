import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/header";

export default function ScheduleLoading() {
  return (
    <>
      <DashboardHeader heading="Schedule" text="View the Olympic schedule" />
      <div className="flex flex-col gap-5">
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>
    </>
  );
}

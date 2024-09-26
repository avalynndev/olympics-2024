import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";
import Venues from "@/components/tables/venues";

export const metadata = constructMetadata({
  title: "Venues - Olympics",
  description: "View the Olympic venues and their details.",
});

export default function VenuePage() {
  return (
    <div className="space-y-4">
      <DashboardHeader
        heading="Venues"
        text="View the Olympic venues and their details."
      />
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-4">
          <Venues />
        </div>
      </div>
    </div>
  );
}

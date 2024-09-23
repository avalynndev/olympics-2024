import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";
import InfoCard from "@/components/dashboard/info-card";
import Medalists from "@/components/dashboard/medalists";
import Medals from "@/components/dashboard/medals";

export const metadata = constructMetadata({
  title: "Dashboard - Olympics",
  description: "Displays information about Olympic medalists and medals.",
});

export default async function DashboardPage() {
  return (
    <>
      <DashboardHeader
        heading="Dashboard"
        text="View the Olympic medalists and medals."
      />
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <InfoCard />
        </div>
        <Medals keepItems={10} />
        <Medalists keepItems={10} />
      </div>
    </>
  );
}

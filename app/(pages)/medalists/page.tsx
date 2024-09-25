import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";
import Medalists from "@/components/tables/medalists";

export const metadata = constructMetadata({
  title: "Medals - Olympics",
  description: "Displays information about Olympic highlights",
});

export default async function Highlights() {
  return (
    <>
      <DashboardHeader
        heading="Medalists"
        text="View the athletes who won medals."
      />
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-4">
          <Medalists showSearch/>
        </div>
      </div>
    </>
  );
}

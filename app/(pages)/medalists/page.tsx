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
      <Medalists showSearch/>
    </>
  );
}

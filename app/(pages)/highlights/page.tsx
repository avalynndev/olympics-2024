import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";

export const metadata = constructMetadata({
  title: "Highlights - Olympics",
  description: "Displays information about Olympic highlights",
});

export default async function Highlights() {
  return (
    <>
      <DashboardHeader
        heading="Highlights"
        text="View the Olympic highlights"
      />
      <div className="">
        type here
      </div>
    </>
  );
}
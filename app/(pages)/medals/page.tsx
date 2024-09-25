import data from "@/data/medals.json";

import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";
import MedalCard from "@/components/dashboard/medal-card";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Medals from "@/components/tables/medals";

export const metadata = constructMetadata({
  title: "Medals - Olympics",
  description: "Displays information about Olympic highlights",
});

export default async function Highlights() {
  return (
    <>
      <DashboardHeader
        heading="Medals Ranking"
        text="View the Countries sorted by medals."
      />
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 xl:grid-cols-3">
        {data.slice(0, 3).map((data, index) => (
          <MedalCard key={data.country_code} data={data} index={index} />
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1">
          <Medals />
        </div>
      </div>
    </>
  );
}

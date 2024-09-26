import { constructMetadata } from "@/lib/utils";
import { AreaChartStacked } from "@/components/charts/area-chart-stacked";
import { CountryCharts } from "@/components/charts/country-charts";
import { InteractiveBarChart } from "@/components/charts/interactive-bar-chart";
import { TopCountriesBarChart } from "@/components/charts/top-countries-chart";
import { DashboardHeader } from "@/components/dashboard/header";


export const metadata = constructMetadata({
  title: "Results – Olympics",
  description: "List of charts showing data about the Olympics.",
});

export default function ResultsPage() {
  return (
    <>
      <DashboardHeader
        heading="Results"
        text="List of charts showing data about the Olympics."
      />
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
          <CountryCharts />
          <CountryCharts />
          <CountryCharts />
          <CountryCharts />
        </div>{" "}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 2xl:grid-cols-2">
          <TopCountriesBarChart />
          <AreaChartStacked />
        </div>{" "}
        <InteractiveBarChart />
      </div>
    </>
  );
}
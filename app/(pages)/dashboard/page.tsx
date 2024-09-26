import dynamic from "next/dynamic";

import { constructMetadata } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/header";
import InfoCard from "@/components/dashboard/info-card";
import Medalists from "@/components/dashboard/medalists";
import Medals from "@/components/dashboard/medals";

const Carousel = dynamic(() => import("@/components/carousel"), {
  ssr: false,
  loading: () => (
    <>
      <div className="relative flex h-[70vh] md:hidden">
        <Skeleton className="absolute inset-0" />
      </div>
      <div className="relative mx-auto hidden h-[70vh] w-full md:flex">
        <Skeleton className="container relative grid h-[70vh] w-full items-center gap-6 rounded-xl object-cover pb-8 pt-6 transition-all md:py-10" />
      </div>
    </>
  ),
});

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
      <div className="flex flex-col gap-5 md:flex-none md:gap-0">
        <Carousel />
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 xl:grid-cols-4">
            <InfoCard />
          </div>
          <Medals keepItems={10} />
          <Medalists keepItems={10} />
        </div>
      </div>
    </>
  );
}

import React from "react";
import highlightsData from "@/data/highlights.json";

import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";
import { HighlightsCard } from "@/components/shared/highlights-card";

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
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3">
        {highlightsData.map((highlight, index) => (
          <HighlightsCard
            key={index}
            title={highlight.title}
            description={highlight.description}
            imageUrl={highlight.image_url}
            videoLink={highlight.video_link}
          />
        ))}
      </div>
    </>
  );
}

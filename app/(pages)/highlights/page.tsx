import React from "react";
import Link from "next/link";
import highlightsData from "@/data/highlights.json";

import { constructMetadata } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as ShadcnCard,
} from "@/components/ui/card";
import { DashboardHeader } from "@/components/dashboard/header";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  videoLink: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  videoLink,
}) => {
  return (
    <ShadcnCard className="my-4 items-center text-center">
      <div className="flex justify-center pt-4">
        <img src={imageUrl} alt={title} className="rounded-lg" />
      </div>
      <CardContent className="overflow-hidden">
        <CardHeader>
          <CardTitle className="truncate text-lg">{title}</CardTitle>
        </CardHeader>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
        <CardFooter className="flex justify-center pt-4">
          <Link href={videoLink} className="">
            <Button variant="ringHover">Watch Video</Button>
          </Link>
        </CardFooter>
      </CardContent>
    </ShadcnCard>
  );
};

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
          <Card
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

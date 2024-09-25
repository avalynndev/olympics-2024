"use client";

import { useState } from "react";
import Link from "next/link";
import data from "@/data/events.json";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DashboardHeader } from "@/components/dashboard/header";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter(
    (event) =>
      event.sport.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.event.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const groupedData = filteredData.reduce((acc, event) => {
    if (!acc[event.sport]) {
      acc[event.sport] = [];
    }
    acc[event.sport].push(event);
    return acc;
  }, {});

  return (
    <>
      <DashboardHeader
        heading="Events"
        text="List of events for each sport from the Paris 2024 Olympics"
      />{" "}
      <div className="px-2">
        <MaxWidthWrapper>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        {Object.keys(groupedData).map((sport, index) => (
          <div key={index} className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h1 className="font-heading text-2xl">{sport}</h1>
              <Link
                href={groupedData[sport][0].sport_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="expandIcon"
                  Icon={ArrowRightIcon}
                  iconPlacement="right"
                >
                  More about {sport}
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {groupedData[sport].map((event, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
                >
                  <p className="font- p-6 text-lg">{event.event}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        </MaxWidthWrapper>
      </div>
    </>
  );
}

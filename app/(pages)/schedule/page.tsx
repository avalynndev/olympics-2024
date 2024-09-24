"use client";

import { useState } from "react";
import data from "@/data/schedule.json";
import { Settings, Search } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DashboardHeader } from "@/components/dashboard/header";

interface Event {
  start_date: string;
  end_date: string;
  day: string;
  status: string;
  discipline: string;
  discipline_code: string;
  event: string;
  event_medal: number;
  phase: string;
  gender: string;
  event_type: string;
  venue: string;
  venue_code: string;
  location_description: string;
  location_code: string;
  url: string;
}

const ScheduleCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>
          {event.discipline} - {event.event}
        </CardTitle>
        <CardDescription>{event.phase}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {new Date(event.start_date).toLocaleString()} -{" "}
          {new Date(event.end_date).toLocaleString()}
        </p>
        <p>{event.location_description}</p>
        <p>Status: {event.status}</p>
      </CardContent>
    </Card>
  );
};

export default function Schedule() {
  const [searchTerm, setSearchTerm] = useState("");
  const [groupBy, setGroupBy] = useState<keyof Event | "none">("none");

  const filteredData = data.filter(
    (event) =>
      event.discipline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.event.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const groupedData =
    groupBy === "none"
      ? { "All Events": filteredData }
      : filteredData.reduce(
          (groups, event) => {
            const key = event[groupBy];
            if (!groups[key]) {
              groups[key] = [];
            }
            groups[key].push(event);
            return groups;
          },
          {} as Record<string, Event[]>,
        );

  return (
    <>
      <DashboardHeader heading="Schedule" text="View the Olympic schedule" />
      <div className="p-4">
        <div className="mb-4 flex items-center justify-center space-x-2">
          <div className="relative w-full">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mr-2"
          /><Search className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
          <Select
            value={groupBy}
            onValueChange={(value) => setGroupBy(value as keyof Event | "none")}
          >
            <SelectTrigger className="w-16">
                <Settings />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No Grouping</SelectItem>
              <SelectItem value="discipline">Discipline</SelectItem>
              <SelectItem value="day">Day</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {Object.entries(groupedData).map(([group, events]) => (
          <div key={group} className="flex flex-col gap-3">
            {groupBy !== "none" && (
              <h2 className="pb-4 font-heading text-2xl">{group}</h2>
            )}
            {events.map((event, index) => (
              <ScheduleCard key={index} event={event} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

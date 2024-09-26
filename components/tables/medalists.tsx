"use client";

import { useMemo, useState } from "react";
import medalistsData from "@/data/medalists.json";
import confetti from "canvas-confetti";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Medalist = {
  medal_date: string;
  medal_type: string;
  medal_code: string | number;
  name: string;
  gender: string;
  country_code: string;
  country: string;
  country_long: string;
  nationality_code: string;
  nationality: string;
  nationality_long: string;
  team: string;
  team_gender: string;
  discipline: string;
  event: string;
  event_type: string;
  url_event: string;
  birth_date: string;
  code_athlete: string | number;
  code_team: string;
  is_medallist: string;
};

type SortKey = keyof Medalist;

interface MedalistsTableProps {
  keepItems?: number;
  showSearch?: boolean;
}

export default function MedalistsTable({
  keepItems = medalistsData.length,
  showSearch = false,
}: MedalistsTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("medal_date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [search, setSearch] = useState("");

  const sortedAndFilteredMedalists = useMemo(() => {
    return medalistsData
      .slice(0, keepItems)
      .filter((medalist) =>
        Object.values(medalist).some((value) =>
          value.toString().toLowerCase().includes(search.toLowerCase()),
        ),
      )
      .sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
  }, [keepItems, sortKey, sortOrder, search]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
    if (sortKey !== columnKey) return null;
    return sortOrder === "asc" ? (
      <ChevronUp className="ml-1 inline" />
    ) : (
      <ChevronDown className="ml-1 inline" />
    );
  };
  const handleClick = () => {
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    const end = Date.now() + 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
    var skew = 1;
    const frame = () => {
      if (Date.now() > end) return;
      var timeLeft = end - Date.now();
      var ticks = Math.max(200, 500 * (timeLeft / end));
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          // since particles fall down, skew start toward the top
          y: Math.random() * skew - 0.2,
        },
        colors: colors,
        shapes: ["circle"],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="space-y-4">
      {showSearch && (
        <div className="flex items-center justify-center space-x-2">
          <div className="relative w-full rounded-md border border-black shadow-sm md:w-1/2">
            <Input
              placeholder="Search medalists..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full"
              onMouseEnter={handleClick}
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      )}
      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                onClick={() => handleSort("medal_date")}
                className="cursor-pointer"
              >
                Date <SortIcon columnKey="medal_date" />
              </TableHead>
              <TableHead
                onClick={() => handleSort("medal_type")}
                className="cursor-pointer"
              >
                Medal <SortIcon columnKey="medal_type" />
              </TableHead>
              <TableHead
                onClick={() => handleSort("name")}
                className="cursor-pointer"
              >
                Name <SortIcon columnKey="name" />
              </TableHead>
              <TableHead
                onClick={() => handleSort("country")}
                className="cursor-pointer"
              >
                Country <SortIcon columnKey="country" />
              </TableHead>
              <TableHead
                onClick={() => handleSort("discipline")}
                className="cursor-pointer"
              >
                Discipline <SortIcon columnKey="discipline" />
              </TableHead>
              <TableHead
                onClick={() => handleSort("event")}
                className="cursor-pointer"
              >
                Event <SortIcon columnKey="event" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedAndFilteredMedalists.map((medalist, index) => (
              <TableRow key={index}>
                <TableCell>
                  {new Date(medalist.medal_date).toLocaleDateString()}
                </TableCell>
                <TableCell>{medalist.medal_type}</TableCell>
                <TableCell>{medalist.name}</TableCell>
                <TableCell>{medalist.country}</TableCell>
                <TableCell>{medalist.discipline}</TableCell>
                <TableCell>{medalist.event}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="text-sm text-gray-500">
        Showing {sortedAndFilteredMedalists.length} out of{" "}
        {medalistsData.length} entries
      </div>
    </div>
  );
}

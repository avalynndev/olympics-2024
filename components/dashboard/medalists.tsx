"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import medalistsData from "@/data/medalists.json";
import { ArrowUpRight, ChevronDown, ChevronUp, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
}

export default function MedalistsTable({
  keepItems = medalistsData.length,
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
  }, [medalistsData, keepItems, sortKey, sortOrder, search]);

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

  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Medalists</CardTitle>
          <CardDescription className="text-balance">
            List of medalists from the Olympics.
          </CardDescription>
        </div>
        <Button size="sm" className="ml-auto shrink-0 gap-1 px-4">
          <Link href="#" className="flex items-center gap-2">
            <span>View All</span>
            <ArrowUpRight className="hidden size-4 sm:block" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {!keepItems && (
            <div className="flex items-center space-x-2">
              <Search className="text-gray-400" />
              <Input
                placeholder="Search medalists..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="max-w-sm"
              />
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
      </CardContent>
    </Card>
  );
}

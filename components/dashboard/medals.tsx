"use client";

import { useState } from "react";
import Link from "next/link";
import medalData from "@/data/medals.json";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";



import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";





// Extend the sort key type to include "total"
type MedalData = {
  name: string;
  gold: number;
  silver: number;
  bronze: number | string;
};

// Add "total" to the SortKey type
type SortKey = keyof MedalData | "total";

const calculateTotal = (data: MedalData) => {
  const gold = typeof data.gold === "number" ? data.gold : 0;
  const silver = typeof data.silver === "number" ? data.silver : 0;
  const bronze = typeof data.bronze === "number" ? data.bronze : 0;
  return gold + silver + bronze;
};

const SortIcon = ({
  columnKey,
  sortKey,
  sortOrder,
}: {
  columnKey: SortKey;
  sortKey: SortKey;
  sortOrder: "asc" | "desc";
}) => {
  if (sortKey !== columnKey) return null;
  return sortOrder === "asc" ? (
    <ChevronUp className="ml-1 inline" />
  ) : (
    <ChevronDown className="ml-1 inline" />
  );
};

const MedalsList = ({
  keepItems = medalData.length,
}: {
  keepItems?: number;
}) => {
  const [sortKey, setSortKey] = useState<SortKey>("gold");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Limit the data to the specified number of items first
  const limitedMedalData = medalData.slice(0, keepItems);

  // Sort the limited data
  const sortedMedalData = [...limitedMedalData].sort((a, b) => {
    // Handle "total" separately from the other fields
    const aValue = sortKey === "total" ? calculateTotal(a) : a[sortKey];
    const bValue = sortKey === "total" ? calculateTotal(b) : b[sortKey];

    if (sortOrder === "asc") {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Medals Ranking</CardTitle>
          <CardDescription className="text-balance">
            Countries sorted by medals.
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
        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  onClick={() => handleSort("name")}
                  className="cursor-pointer"
                >
                  Country{" "}
                  <SortIcon
                    columnKey="name"
                    sortKey={sortKey}
                    sortOrder={sortOrder}
                  />
                </TableHead>
                <TableHead
                  onClick={() => handleSort("gold")}
                  className="cursor-pointer text-center"
                >
                  🥇 Gold{" "}
                  <SortIcon
                    columnKey="gold"
                    sortKey={sortKey}
                    sortOrder={sortOrder}
                  />
                </TableHead>
                <TableHead
                  onClick={() => handleSort("silver")}
                  className="cursor-pointer text-center"
                >
                  🥈 Silver{" "}
                  <SortIcon
                    columnKey="silver"
                    sortKey={sortKey}
                    sortOrder={sortOrder}
                  />
                </TableHead>
                <TableHead
                  onClick={() => handleSort("bronze")}
                  className="cursor-pointer text-center"
                >
                  🥉 Bronze{" "}
                  <SortIcon
                    columnKey="bronze"
                    sortKey={sortKey}
                    sortOrder={sortOrder}
                  />
                </TableHead>
                <TableHead
                  onClick={() => handleSort("total")}
                  className="cursor-pointer text-center"
                >
                  Total{" "}
                  <SortIcon
                    columnKey="total"
                    sortKey={sortKey}
                    sortOrder={sortOrder}
                  />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedMedalData.map((data, index) => (
                <TableRow key={data.name}>
                  <TableCell className="font-medium">
                    {index + 1}. {data.name}
                  </TableCell>
                  <TableCell className="text-center">{data.gold}</TableCell>
                  <TableCell className="text-center">{data.silver}</TableCell>
                  <TableCell className="text-center">{data.bronze}</TableCell>
                  <TableCell className="text-center font-bold">
                    {calculateTotal(data)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default MedalsList;
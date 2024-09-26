"use client";

import { useState } from "react";
import medalData from "@/data/medals.json";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

import { constructMetadata } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type MedalData = {
  name: string;
  gold: number;
  silver: number;
  bronze: number | string;
};

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

export const metadata = constructMetadata({
  title: "Medals - Olympics",
  description: "Displays information about Olympic highlights",
});

export default function Medals({
  keepItems = medalData.length,
  showSearch = false,
}: {
  keepItems?: number;
  showSearch?: boolean;
}) {
  const [sortKey, setSortKey] = useState<SortKey>("gold");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [search, setSearch] = useState("");

  const limitedMedalData = medalData.slice(0, keepItems);

  const sortedMedalData = [...limitedMedalData]
    .filter((medalist) =>
      Object.values(medalist).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase()),
      ),
    )
    .sort((a, b) => {
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
    <div className="space-y-4">
      {showSearch && (
        <div className="flex items-center justify-center space-x-2">
          <div className="relative w-full rounded-md border border-black shadow-sm md:w-1/2">
            <Input
              placeholder="Search medal ranking..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full"
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
      <div className="text-sm text-gray-500">
        Showing {keepItems} out of {medalData.length} entries
      </div>
    </div>
  );
}

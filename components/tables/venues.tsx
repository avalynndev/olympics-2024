"use client";

import medalData from "@/data/medals.json";
import data from "@/data/venue.json";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Venues() {
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="cursor-pointer">Venue</TableHead>
              <TableHead className="cursor-pointer">Sports</TableHead>
              <TableHead className="cursor-pointer">Start Date</TableHead>
              <TableHead className="cursor-pointer">End Date</TableHead>
              <TableHead className="cursor-pointer">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((venue) => (
              <TableRow key={venue.tag}>
                <TableCell>{venue.venue}</TableCell>
                <TableCell>{venue.sports.join(", ")}</TableCell>
                <TableCell>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        {new Date(venue.date_start).toLocaleDateString()}
                      </TooltipTrigger>
                      <TooltipContent>
                        {new Date(venue.date_start).toLocaleString()}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        {new Date(venue.date_end).toLocaleDateString()}
                      </TooltipTrigger>
                      <TooltipContent>
                        {new Date(venue.date_end).toLocaleString()}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell>
                  <a
                    href={venue.url}
                    className="text-indigo-600 hover:text-indigo-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="text-sm text-gray-500">
        Showing {data.length} out of {data.length} entries
      </div>
    </div>
  );
}

import data from "@/data/venue.json";

import { constructMetadata } from "@/lib/utils";
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
import { DashboardHeader } from "@/components/dashboard/header";

export const metadata = constructMetadata({
  title: "Venues - Olympics",
  description: "View the Olympic venues and their details.",
});

export default function VenuePage() {
  return (
    <div className="space-y-4">
      <DashboardHeader
        heading="Venues"
        text="View the Olympic venues and their details."
      />
      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="cursor-pointer text-center">
                Venue
              </TableHead>
              <TableHead className="cursor-pointer text-center">
                Sports
              </TableHead>
              <TableHead className="cursor-pointer text-center">
                Start Date
              </TableHead>
              <TableHead className="cursor-pointer text-center">
                End Date
              </TableHead>
              <TableHead className="cursor-pointer text-center">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((venue) => (
              <TableRow key={venue.tag}>
                <TableCell className="whitespace-nowrap px-6 py-4">
                  {venue.venue}
                </TableCell>
                <TableCell className="whitespace-nowrap px-6 py-4">
                  {venue.sports.join(", ")}
                </TableCell>
                <TableCell className="whitespace-nowrap px-6 py-4">
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
                <TableCell className="whitespace-nowrap px-6 py-4">
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
                <TableCell className="whitespace-nowrap px-6 py-4">
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
    </div>
  );
}

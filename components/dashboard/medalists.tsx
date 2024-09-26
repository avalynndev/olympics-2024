import Link from "next/link";
import medalistsData from "@/data/medalists.json";
import { ArrowUpRight } from "lucide-react";
import Medalists from "@/components/tables/medalists";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MedalistsTableProps {
  keepItems?: number;
  showSearch?: boolean;
}

export default function MedalistsCard({
  keepItems = medalistsData.length,
  showSearch,
}: MedalistsTableProps) {
  return (
    <Card className="xl:col-span-2 border bg-transparent shadow-lg">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Medalists</CardTitle>
          <CardDescription className="text-balance">
            List of medalists from the Olympics.
          </CardDescription>
        </div>
        <Button size="sm" className="ml-auto shrink-0 gap-1 px-4">
          <Link href="/medalists" className="flex items-center gap-2">
            <span>View All</span>
            <ArrowUpRight className="hidden size-4 sm:block" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Medalists keepItems={keepItems} showSearch={showSearch} />
      </CardContent>
    </Card>
  );
}

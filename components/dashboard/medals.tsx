import Link from "next/link";
import medalData from "@/data/medals.json";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Medals from "@/components/tables/medals";

const MedalsList = ({
  keepItems = medalData.length,
}: {
  keepItems?: number;
}) => {
  return (
    <Card className="border bg-transparent shadow-lg xl:col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Medals Ranking</CardTitle>
          <CardDescription className="text-balance">
            Countries sorted by medals.
          </CardDescription>
        </div>
        <Button size="sm" className="ml-auto shrink-0 gap-1 px-4">
          <Link href="/medals" className="flex items-center gap-2">
            <span>View All</span>
            <ArrowUpRight className="hidden size-4 sm:block" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Medals keepItems={keepItems} />
      </CardContent>
    </Card>
  );
};

export default MedalsList;

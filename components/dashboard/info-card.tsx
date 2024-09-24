import { MedalIcon, TrophyIcon, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NumberTicker from "@/components/ui/number-ticker";

export default function InfoCard() {
  return (
    <>
      <Card className="rounded-lg border border-blue-500 bg-gradient-to-b from-blue-200 to-white shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-sm font-medium text-gray-800">
              World Records
            </CardTitle>
          </div>
          <TrophyIcon className="size-6 text-muted-foreground" />
        </CardHeader>
        <CardContent className="pt-4">
          <div className="text-4xl">
            <NumberTicker className="text-pretty dark:text-background"  value={92} />
          </div>
          <p className="text-xs text-muted-foreground">
            of the world records have been broken
          </p>
        </CardContent>
      </Card>
      <Card className="rounded-lg border border-green-500 bg-gradient-to-b from-green-200 to-white shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-sm font-medium text-gray-800">
              Participation{" "}
            </CardTitle>
          </div>
          <MedalIcon className="size-6 text-muted-foreground" />
        </CardHeader>
        <CardContent className="pt-4">
          <div className="text-4xl dark:text-background">
            <NumberTicker className="text-pretty dark:text-background"  value={9500000} />
          </div>
          <p className="text-xs text-muted-foreground">
            tickets sold by the organisers
          </p>
        </CardContent>
      </Card>
      <Card className="rounded-lg border border-red-500 bg-gradient-to-b from-red-200 to-white shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-sm font-medium text-gray-800">
              Athletes
            </CardTitle>
          </div>
          <MedalIcon className="size-6 text-muted-foreground" />
        </CardHeader>
        <CardContent className="pt-4">
          <div className="text-4xl">
            <NumberTicker className="text-pretty dark:text-background" value={10500} />
          </div>
          <p className="text-xs text-muted-foreground">
            athletes from all over the world
          </p>
        </CardContent>
      </Card>
      <Card className="rounded-lg border border-gray-500 bg-gradient-to-b from-gray-200 to-white shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-sm font-medium">
              Total Medals Earned
            </CardTitle>
          </div>
          <Users className="size-6 text-muted-foreground" />
        </CardHeader>
        <CardContent className="pt-4">
          <div className="text-4xl text-pretty  dark:text-background">
            Over <NumberTicker className="text-pretty dark:text-background" value={1000} />+
          </div>
          <div className="text-xs text-muted-foreground">
            Medals earned by all countries in total
          </div>
        </CardContent>
      </Card>
    </>
  );
}

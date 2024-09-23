import { MedalIcon, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InfoCard() {
  return (
    <>
      <Card className="rounded-lg border border-blue-500 bg-gradient-to-b from-blue-200 to-white shadow-lg">
        {/* Card for Rank 1 */}
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <div className="bg-gold rounded-full px-2 py-1 text-xs font-semibold text-gray-800">
              #1
            </div>
            <CardTitle className="text-sm font-medium text-gray-800">
              Highest Number of Medals
            </CardTitle>
          </div>
          <MedalIcon className="h-6 w-6 text-muted-foreground" />
        </CardHeader>
        <CardContent className="pt-4">
          <div className="text-4xl font-bold dark:text-background">USA</div>
          <p className="text-xs text-muted-foreground">with over 120 medals</p>
        </CardContent>
      </Card>
      <Card className="rounded-lg border border-green-500 bg-gradient-to-b from-green-200 to-white shadow-lg">
        {/* Card for Rank 2 */}
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <div className="bg-silver rounded-full px-2 py-1 text-xs font-semibold text-gray-800">
              #2
            </div>
            <CardTitle className="text-sm font-medium text-gray-800">
              Second Highest Medals
            </CardTitle>
          </div>
          <MedalIcon className="h-6 w-6 text-muted-foreground" />
        </CardHeader>
        <CardContent className="pt-4">
          <div className="text-4xl font-bold dark:text-background">China</div>
          <p className="text-xs text-muted-foreground">with over 90 medals</p>
        </CardContent>
      </Card>
      <Card className="rounded-lg border border-red-500 bg-gradient-to-b from-red-200 to-white shadow-lg">
        {/* Card for Rank 3 */}
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <div className="bg-bronze rounded-full px-2 py-1 text-xs font-semibold text-gray-800">
              #3
            </div>
            <CardTitle className="text-sm font-medium text-gray-800">
              Third Highest Medals
            </CardTitle>
          </div>
          <MedalIcon className="h-6 w-6 text-muted-foreground" />
        </CardHeader>
        <CardContent className="pt-4">
          <div className="text-4xl font-bold dark:text-background">Japan</div>
          <p className="text-xs text-muted-foreground">with over 40 medals</p>
        </CardContent>
      </Card>
      <Card>
        {/* Card for Total Medals */}
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-sm font-medium">
              Total Medals Earned
            </CardTitle>
          </div>
          <Users className="h-6 w-6 text-muted-foreground" />
        </CardHeader>
        <CardContent className="pt-4">
          <div className="text-2xl font-bold">Over 1000+</div>
          <div className="text-xs text-muted-foreground">
            Medals earned by all countries in total
          </div>
        </CardContent>
      </Card>
    </>
  );
}

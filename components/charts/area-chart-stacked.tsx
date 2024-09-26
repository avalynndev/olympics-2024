"use client";

// Import medals data
import data from "@/data/medals.json";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Replace chartData with medals data
const chartData = data.slice(0,10);

const chartConfig = {
  gold: {
    label: "Gold",
    color: "hsl(var(--chart-1))",
  },
  silver: {
    label: "Silver",
    color: "hsl(var(--chart-2))",
  },
  bronze: {
    label: "Bronze",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function AreaChartStacked() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        {/* <CardTitle>Area Chart - Stacked</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription> */}
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 30, // Adjusted left margin
              bottom: 10,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="country_code" // Change this to the appropriate key for country names
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
              padding={{ left: 20, right: 20 }} // Add padding to ensure labels are visible
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="gold"
              fill={chartConfig.gold.color}
              name="Gold"
              type="natural"
              fillOpacity={0.4}
              stroke={chartConfig.gold.color}
              stackId="a"
            />
            <Area
              dataKey="silver"
              fill={chartConfig.silver.color}
              name="Silver"
              type="natural"
              fillOpacity={0.4}
              stroke={chartConfig.silver.color}
              stackId="b"
            />
            <Area
              dataKey="bronze"
              fill={chartConfig.bronze.color}
              name="Bronze"
              type="natural"
              fillOpacity={0.4}
              stroke={chartConfig.bronze.color}
              stackId="c"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
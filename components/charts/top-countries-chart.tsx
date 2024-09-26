"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

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

import data from "@/data/medals.json";

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

export function TopCountriesBarChart() {
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
          <BarChart
            data={data.slice(0, 5)}
            width={500}
            height={300}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              tickLine={false}
              tickMargin={100}
              axisLine={false}
            />
            <YAxis dataKey="name" type="category" width={100} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar
              dataKey="gold"
              fill={chartConfig.gold.color}
              name="Gold"
              radius={[0, 8, 8, 0]}
            />
            <Bar
              dataKey="silver"
              fill={chartConfig.silver.color}
              name="Silver"
              radius={[0, 8, 8, 0]}
            />
            <Bar
              dataKey="bronze"
              fill={chartConfig.bronze.color}
              name="Bronze"
              radius={[0, 8, 8, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

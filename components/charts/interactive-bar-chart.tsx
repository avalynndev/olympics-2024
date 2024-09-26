"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import data from "@/data/medals.json";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = data
  .map(country => ({
    name: country.name,
    country_code: country.country_code,
    gold: Math.max(country.gold, 0),
    silver: Math.max(country.silver, 0),
    bronze: Math.max(country.bronze, 0), 
  }))
  .sort(() => Math.random() - 0.5);

const chartConfig = {
  views: {
    label: "Medals",
  },
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

export function InteractiveBarChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("gold"); // Default to gold medals

  const total = React.useMemo(
    () => ({
      gold: chartData.reduce((acc, curr) => acc + curr.gold, 0),
      silver: chartData.reduce((acc, curr) => acc + curr.silver, 0),
      bronze: chartData.reduce((acc, curr) => acc + curr.bronze, 0),
    }),
    [],
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Medal Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total medals for each country
          </CardDescription>
        </div>
        <div className="flex">
          {["gold", "silver", "bronze"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={() => ""} // Display country names
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="medals"
                  labelFormatter={(value) => value} // Display country name
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

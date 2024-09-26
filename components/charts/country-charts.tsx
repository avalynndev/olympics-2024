"use client";

import * as React from "react";
import medals from "@/data/medals.json";
import { Check, ChevronsUpDown } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";



import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";





const medalData = medals.map((medal) => ({
  value: medal.country_code,
  label: medal.name,
}));

type CountryType = {
  value: string;
  label: string;
};

const chartConfig = {
  Gold: {
    label: "Gold",
    color: "hsl(var(--chart-1))",
  },
  Silver: {
    label: "Silver",
    color: "hsl(var(--chart-2))",
  },
  Bronze: {
    label: "Bronze",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function CountryCharts() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedCountry, setSelectedCountry] =
    React.useState<CountryType | null>(null);

  React.useEffect(() => {
    const randomCountry =
      medalData[Math.floor(Math.random() * medalData.length)];
    setSelectedCountry(randomCountry);
  }, []);

  const handleClick = (country: CountryType) => {
    const currentValue = country.value;
    setValue(currentValue === value ? "" : currentValue);
    setSelectedCountry(currentValue === value ? null : country);
    setOpen(false);
  };

  const chartData = selectedCountry
    ? Object.entries(chartConfig).map(([key, config]) => ({
        name: key,
        Medals:
          medals.find(
            (medal) => medal.country_code === selectedCountry.value,
          )?.[key.toLowerCase()] || 0,
        fill: config.color,
      }))
    : [];

  return (
    <div className="space-y-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value
              ? medalData.find((medal) => medal.value === value)?.label
              : "Select country..."}
            <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Search country..." className="h-9" />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {medalData.map((medal) => (
                  <CommandItem
                    key={medal.value}
                    value={medal.value}
                    onSelect={() => handleClick(medal)}
                  >
                    {medal.label}
                    <Check
                      className={cn(
                        "ml-auto size-4",
                        value === medal.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {selectedCountry && (
        <Card className="flex flex-col">
          <CardContent className="">
            <ChartContainer config={chartConfig}>
              <BarChart
                width={500}
                height={300}
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Bar dataKey="Medals" fill={chartConfig.Gold.color} radius={8}>
                  <LabelList dataKey="Medals" position="top" />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-pretty text-center text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Country Code: {selectedCountry.value}
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total medals for {selectedCountry.label}
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
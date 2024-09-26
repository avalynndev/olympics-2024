import { Award, MedalIcon, TrophyIcon, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NumberTicker from "@/components/ui/number-ticker";

const cardData = [
  {
    title: "World Records",
    value: 92,
    icon: TrophyIcon,
    color: "blue",
    description: "world records have been broken",
  },
  {
    title: "Total Medals",
    value: 1000,
    icon: Award,
    color: "amber",
    description: "medals earned by all countries",
    prefix: "Over",
    suffix: "+",
  },

  {
    title: "Athletes",
    value: 10500,
    icon: MedalIcon,
    color: "red",
    description: "athletes from all over the world",
  },
  {
    title: "Viewers",
    value: 9500000,
    icon: Users,
    color: "green",
    description: "tickets sold by the organisers",
  },
];

const colorMap = {
  blue: { light: "#DBEAFE", dark: "#2563EB" },
  green: { light: "#D1FAE5", dark: "#10B981" },
  red: { light: "#FEE2E2", dark: "#EF4444" },
  amber: { light: "#FEF3C7", dark: "#F59E0B" },
};

export default function ImprovedInfoCard() {
  return (
    <>
      {cardData.map((card, index) => (
        <Card
          key={index}
          className="rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
          style={
            {
              "--card-bg-from": colorMap[card.color].light,
              "--card-bg-to": "white",
              "--card-border": colorMap[card.color].dark,
              background:
                "linear-gradient(to bottom right, var(--card-bg-from), var(--card-bg-to))",
              borderColor: "var(--card-border)",
            } as React.CSSProperties
          }
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">
              {card.title}
            </CardTitle>
            <card.icon
              className="size-5"
              style={{ color: colorMap[card.color].dark }}
            />
          </CardHeader>
          <CardContent>
            <div
              className="text-2xl font-bold text-gray-800"
              style={{ color: colorMap[card.color].dark }}
            >
              {card.prefix && (
                <span className="mr-1 text-lg">{card.prefix}</span>
              )}
              <NumberTicker
                value={card.value}
                className="inline-block"
                style={{ color: colorMap[card.color].dark }}
              />
              {card.suffix}
            </div>
            <p className="mt-1 text-xs text-gray-500">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

"use client";

import React from "react";
import confetti from "canvas-confetti";
import { Medal, Trophy } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const InteractiveCard = ({ data, index }) => {
  const handleClick = () => {
    const end = Date.now() + 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };
  return (
    <Card
      key={data.country_code}
      className={`overflow-hidden rounded-lg border bg-gradient-to-b to-white shadow-lg${
        index + 1 === 1
          ? "border-yellow-500 from-yellow-100"
          : index + 1 === 2
            ? "border-gray-500 from-gray-100"
            : "border-orange-500 from-orange-100"
      }`}
      onMouseEnter={handleClick}
    >
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          {index + 1 === 1 ? (
            <Trophy className="size-16 text-yellow-500" />
          ) : (
            <Medal
              className={`size-16 ${
                index + 1 === 2 ? "text-gray-400" : "text-orange-400"
              }`}
            />
          )}
        </div>
        <h2 className="mb-2 text-2xl font-bold text-gray-800">
          {index + 1}. {data.name}
        </h2>
        <div className="flex justify-center space-x-4">
          <span className="font-bold text-yellow-500">{data.gold} 🥇</span>
          <span className="font-bold text-gray-400">{data.silver} 🥈</span>
          <span className="font-bold text-orange-400">{data.bronze} 🥉</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveCard;

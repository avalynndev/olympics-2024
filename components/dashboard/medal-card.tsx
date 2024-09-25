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
        particleCount: 3,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
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
      className={`relative overflow-hidden rounded-xl border bg-gradient-to-b shadow-2xl transition-transform hover:scale-105${
        index + 1 === 1
          ? "border-yellow-400 from-yellow-300 to-yellow-100"
          : index + 1 === 2
          ? "border-gray-400 from-gray-300 to-gray-100"
          : "border-orange-400 from-orange-300 to-orange-100"
      }`}
      onMouseEnter={handleClick}
    >
      <CardContent className="relative p-8 text-center">
        <div className="mb-4 flex justify-center">
          {index + 1 === 1 ? (
            <Trophy className="size-12 text-yellow-500 transition-transform hover:rotate-12 hover:scale-110" />
          ) : (
            <Medal
              className={`size-12 transition-transform hover:rotate-12 hover:scale-110${
                index + 1 === 2 ? "text-gray-400" : "text-orange-400"
              }`}
            />
          )}
        </div>
        <h2 className="mb-2 text-3xl font-extrabold tracking-wide text-gray-800">
          {index + 1}. {data.name}
        </h2>
        <div className="flex justify-center space-x-6">
          <span className="text-lg font-bold text-yellow-500">{data.gold} 🥇</span>
          <span className="text-lg font-bold text-gray-400">{data.silver} 🥈</span>
          <span className="text-lg font-bold text-orange-400">{data.bronze} 🥉</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveCard;

import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export default function OlympicTimeline() {
  const data = [
    {
      title: "Ancient Origins",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            The Olympics began in ancient Greece around 776 BCE, dedicated to
            Zeus. Initially, it featured a single race but later included events
            like wrestling and chariot racing. The Games fostered unity among
            Greek city-states and honored victors with olive wreaths.
          </p>
        </div>
      ),
    },
    {
      title: "Decline and Abolition",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            The ancient Olympics declined under Roman rule and were abolished in
            393 CE by Emperor Theodosius I due to their pagan origins. The site
            of Olympia fell into ruin and the Games were forgotten until modern
            times.
          </p>
        </div>
      ),
    },
    {
      title: "Modern Revival",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Pierre de Coubertin revived the Olympics in 1896, inspired by the
            ancient Games. The first modern Olympics were held in Athens,
            featuring 13 nations and 43 events. This marked the beginning of the
            international sporting event we know today.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <Image
                src="/_static/history/1913.jpg"
                alt="Olympic Logo 1913"
                width={500}
                height={500}
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/_static/history/1914.jpg"
                alt="Olympic Logo 1914"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Expansion and Growth",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            The Olympics expanded rapidly, including female athletes in 1900 and
            introducing the Winter Olympics in 1924. The Games grew in size and
            scope, adding new sports and more countries.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <Image
                src="/_static/history/1920.jpg"
                alt="Olympic Logo 1920"
                width={500}
                height={500}
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/_static/history/1957.jpg"
                alt="Olympic Logo 1957"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Challenges and Evolution",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            The Olympics faced challenges like World Wars and political
            boycotts. Doping scandals also emerged, leading to strict
            anti-doping measures. Despite these issues, the Games continued to
            evolve and adapt.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <Image
                src="/_static/history/1986.jpg"
                alt="Olympic Logo 1986"
                width={500}
                height={500}
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/_static/history/2010.jpg"
                alt="Olympic Logo 2010"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Notable Olympics",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            <b>Berlin 1936:</b> Used for Nazi propaganda. <br />
            <br />
            <b>Tokyo 1964:</b> First Olympics in Asia. <br />
            <br />
            <b>Sydney 2000:</b> Celebrated for its organization. <br />
            <br />
            <b>Beijing 2008:</b> Known for its grand opening. <br />
            <br />
            <b>Tokyo 2020:</b> Held in 2021 due to COVID-19, without spectators.
          </p>
        </div>
      ),
    },
    {
      title: "Cultural Impact and Legacy",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            The Olympics promote global unity and peace, showcasing athletic
            excellence and diversity. The five rings symbolize the union of
            continents. The Games continue to inspire and unite people
            worldwide.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
        <Timeline data={data} />
    </div>
  );
}

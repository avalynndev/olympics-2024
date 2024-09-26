"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import highlightsData from "@/data/highlights.json";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Highlights = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="pb-32">
      <div className="container">
        <div className="mb-8 flex flex-col items-center space-x-4 justify-center md:mb-14 md:flex-row md:items-end lg:mb-16">

          <div className="mt-8 flex shrink-0 items-center justify-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>          
          <div>
            <Link
              href="/highlights"
              className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
            >
              <Button
                variant="expandIcon"
              >
                Explore all{" "}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="">
            {highlightsData.slice(3, 10).map((item) => (
              <CarouselItem
                key={item.title}
                className="pl-[20px] md:max-w-[452px]"
              >
                <a
                  href={item.video_link}
                  className="group flex flex-col justify-between"
                >
                  <div className="flex aspect-[3/2] text-clip rounded-xl">
                    <div className="flex-1">
                      <div className="relative size-full origin-bottom transition duration-300 group-hover:scale-105">
                        <Image
                          src={item.image_url}
                          alt={item.title}
                          className="size-full rounded-xl object-cover object-center"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-1 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                    {item.description}
                  </div>
                  <div className="flex items-center text-sm">
                    Watch Now{" "}
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Highlights;

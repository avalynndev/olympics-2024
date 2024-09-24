import Image from "next/image";
import Link from "next/link";
import data from "@/data/carousel.json";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default async function CarouselComponent() {
  return (
    <>
      <Carousel className="mb-10">
        <CarouselContent className="mx-auto flex w-full">
          {data.map((el, index) => (
            <CarouselItem key={index}>
              <div className="relative flex h-[70vh] md:hidden">
                <Image
                  alt={el.title}
                  width={1000}
                  height={1000}
                  className="size-full rounded-t-xl object-cover"
                  src={el.image}
                />
                <div className="absolute bottom-0 top-1/2 flex w-full flex-col justify-between border-white bg-gradient-to-t from-background to-transparent">
                  <div></div>
                  <div className="flex flex-col items-center">
                    <div className="flex w-9/12 items-center justify-center text-pretty text-center text-3xl font-bold">
                      {el.title}
                    </div>
                    {el.description && (
                      <div className="text-center text-sm text-muted-foreground">
                        {el.description}
                      </div>
                    )}
                    <div className="my-2 flex gap-2">
                      <Link href={el.link}>
                        <Button className="w-full whitespace-nowrap">
                          Explore
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto hidden h-[70vh] w-full md:flex">
                <Image
                  alt={el.title}
                  width={1000}
                  height={1000}
                  className="size-full rounded-t-xl object-cover object-center"
                  src={el.image}
                />
                <div className="to-from-background/10 absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-background">
                  <div></div>
                  <div className="mx-auto w-[96%]">
                    <div className="flex w-[500px] flex-col gap-1 text-pretty">
                      <div className="text-pretty text-3xl font-bold uppercase">
                        {el.title}
                      </div>
                      {el.description && (
                        <div className="text-pretty text-sm text-muted-foreground">
                          {el.description}
                        </div>
                      )}
                      <div className="my-2 flex gap-2">
                        <Link href={el.link}>
                          <Button
                            variant="expandIcon"
                            Icon={ArrowRightIcon}
                            iconPlacement="right"
                            className="w-full whitespace-nowrap"
                          >
                            Explore
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}

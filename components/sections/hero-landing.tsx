import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export default async function HeroLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-24">
      <div className="container flex max-w-screen-md flex-col items-center gap-5 text-center">
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "xl" }),
            "px-4",
          )}
          target="_blank"
        >
          <span className="mr-3">🏅</span> Explore Olympics 2024 Data!
        </Link>
        <h1 className="font-satoshi text-balance text-[40px] font-black leading-[1.15] tracking-tight sm:text-5xl md:text-6xl md:leading-[1.15]">
          Discover the{" "}
          <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            2024 Olympic Games
          </span>
        </h1>
        <p className="max-w-2xl text-balance text-muted-foreground sm:text-lg">
          Find detailed information about events, athletes, and results. <br />
          Stay updated with the latest statistics and analyses.
        </p>
        <div className="flex justify-center space-x-2">
          <Link
            href="/dashboard"
            prefetch={true}
            className={cn(
              buttonVariants({ rounded: "xl", size: "lg" }),
              "gap-2 px-5 text-[15px]",
            )}
          >
            <span>Explore Analytics</span>
            <Icons.arrowRight className="size-4" />
          </Link>
          <Link
            href="/events"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: "outline",
                rounded: "xl",
                size: "lg",
              }),
              "px-4 text-[15px]",
            )}
          >
            <p>
              <span className="hidden sm:inline-block">Explore</span>{" "}
              Events
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

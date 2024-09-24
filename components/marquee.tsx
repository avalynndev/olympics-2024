import Image from "next/image";
import Link from "next/link";
import sports from "@/data/sports.json";

import Marquee from "@/components/ui/marquee";

const Card = ({
  sport,
  sport_url,
  image_id,
  description,
}: {
  sport: string;
  sport_url: string;
  image_id: string;
  description: string;
}) => {
  return (
    <Link
      href={`${sport_url}`}
      className="group relative flex max-w-xs cursor-pointer flex-col gap-2 overflow-hidden md:max-w-sm"
    >
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border bg-background/50 shadow">
        <Image
          fill
          className="rounded-md object-cover"
          src={`https://img.olympics.com/images/image/private/t_16-9_295-196/f_auto/primary/${image_id}`}
          alt={sport}
          sizes="100%"
        />
      </div>

      <div className="space-y-1.5">
        <div className="flex items-start justify-between gap-1">
          <span className="text-sm font-semibold">{sport}</span>
        </div>

        <p className="line-clamp-3 text-xs text-muted-foreground">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default function MarqueeDemo() {
  return (
    <section id="showcase" className="container py-14">
      <div className="relative flex flex-col">
        <Marquee pauseOnHover className="max-w-screen [--duration:80s]">
          {sports.map((sport) => (
            <Card key={sport.sport} {...sport} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="max-w-screen mt-10 [--duration:80s]"
        >
          {sports.map((sport) => (
            <Card key={sport.sport} {...sport} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/12 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/12 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}

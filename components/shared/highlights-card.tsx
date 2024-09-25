import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as ShadcnCard,
} from "@/components/ui/card";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  videoLink: string;
}

export const HighlightsCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  videoLink,
}) => {
  return (
    <ShadcnCard className="my-4 items-center text-center">
      <div className="flex justify-center">
        <Image
          src={imageUrl}
          alt={title}
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>
      <CardContent className="overflow-hidden">
        <CardHeader>
          <CardTitle className="truncate text-lg">{title}</CardTitle>
        </CardHeader>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
        <CardFooter className="flex justify-center pt-4">
          <Link href={videoLink} className="">
            <Button variant="ringHover">Watch Video</Button>
          </Link>
        </CardFooter>
      </CardContent>
    </ShadcnCard>
  );
};

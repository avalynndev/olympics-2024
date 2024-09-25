import Image from "next/image";
import Link from "next/link";
import highlightsData from "@/data/highlights.json";
import { allPosts } from "contentlayer/generated";



import { getBlurDataURL } from "@/lib/utils";
import { BlogPosts } from "@/components/content/blog-posts";
import Marquee from "@/components/marquee";
import HeroLanding from "@/components/sections/hero-landing";
import VideoPlayer from "@/components/sections/video-player";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default async function IndexPage() {
  const posts = await Promise.all(
    allPosts
      .filter((post) => post.published)
      .sort((a, b) => b.date.localeCompare(a.date))
      .map(async (post) => ({
        ...post,
        blurDataURL: await getBlurDataURL(post.image),
      })),
  );
  return (
    <div className="overflow-hidden">
      <HeroLanding />
      <VideoPlayer />
      <div className="pt-10">
        <HeaderSection
          title="Discover Features."
          subtitle="Explore  detailed information about Olympic events, athletes, and results."
        />
        <Marquee />
      </div>
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center space-y-10 pb-16 pt-10">
        <HeaderSection
          title="Discover Features."
          subtitle="Explore detailed information about Olympic events, athletes, and results."
        />
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
          {highlightsData.slice(0, 4).map((highlight, index) => (
            <Link
              key={index}
              href={`${highlight.video_link}`}
              className="group relative flex max-w-xs cursor-pointer flex-col gap-2 overflow-hidden md:max-w-sm"
            >
              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border bg-background/50 shadow">
                <Image
                  fill
                  className="rounded-md object-cover"
                  src={highlight.image_url}
                  alt={highlight.title}
                  sizes="100%"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-start justify-between gap-1">
                  <span className="text-sm font-semibold">
                    {highlight.title}
                  </span>
                </div>

                <p className="line-clamp-3 text-xs text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <MaxWidthWrapper className="space-y-10 pb-16">
        <HeaderSection
          label="Features"
          title="Discover Features."
          subtitle="Explore detailed information about Olympic events, athletes, and results."
        />
        <BlogPosts posts={posts} />
      </MaxWidthWrapper>
    </div>
  );
}
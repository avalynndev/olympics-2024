import { allPosts } from "contentlayer/generated";
import Highlights from "@/components/content/highlight-card";
import { getBlurDataURL } from "@/lib/utils";
import { BlogPosts } from "@/components/content/blog-posts";
import { NewsletterForm } from "@/components/forms/newsletter-form";
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
        <Highlights />
      </div>
      <MaxWidthWrapper className="space-y-10 pb-16">
        <HeaderSection
          title="Discover Features."
          subtitle="Explore detailed information about Olympic events, athletes, and results."
        />
        <BlogPosts posts={posts} />
      </MaxWidthWrapper>
      <section className="py-32">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Subscribe to our newsletter
            </h3>
            <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
              Get all olympic game updates and news quickly to your inbox.
            </p>
            <div className="w-full md:max-w-lg">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

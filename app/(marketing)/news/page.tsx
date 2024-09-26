import { TwitterTimelineEmbed } from "@/packages/react-twitter-embed";
import { allPosts } from "contentlayer/generated";

import { constructMetadata, getBlurDataURL } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NewsPosts } from "@/components/content/news-posts";

export const metadata = constructMetadata({
  title: "News – Olympics",
  description: "Latest news and updates from Olympics.",
});

export default async function NewsPage() {
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
    <>
      <NewsPosts posts={posts} />
      <div className="py-8">
        <ScrollArea className="h-[830px] w-full rounded-lg border">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="Olympics"
            noHeader
            transparent
            noFooter
            noBorders
            noScrollbar
          />
        </ScrollArea>
      </div>
    </>
  );
}

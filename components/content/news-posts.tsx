import { Post } from "@/.contentlayer/generated";

import { NewsCard } from "./news-card";

export function NewsPosts({
  posts,
}: {
  posts: (Post & {
    blurDataURL: string;
  })[];
}) {
  return (
    <main className="space-y-8">
      <NewsCard data={posts[0]} horizontale priority />

      <div className="grid gap-8 md:grid-cols-2 md:gap-x-6 md:gap-y-10 xl:grid-cols-3">
        {posts.slice(1).map((post, idx) => (
          <NewsCard data={post} key={post._id} priority={idx <= 2} />
        ))}
      </div>
    </main>
  );
}

export const BLOG_CATEGORIES: {
  title: string;
  slug: "news" | "education";
  description: string;
}[] = [
  {
    title: "News",
    slug: "news",
    description: "Updates and announcements from Olympics.",
  },
  {
    title: "Education",
    slug: "education",
    description: "Educational content about Olympics.",
  },
];

export const BLOG_AUTHORS = {
  shadcn: {
    name: "shadcn",
    image: "/_static/avatars/shadcn.jpeg",
    twitter: "shadcn",
  },
};

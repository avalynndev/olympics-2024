import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Olympics",
  description:
    "Explore the world of Olympics through this website, built with Next.js, TailwindCSS, and Shadcn/ui.", 
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/avalynndev",
    github: "https://github.com/avalynndev/olympics",
  },
  mailSupport: "avalynndev@gmail.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "About",
    items: [
      { title: "About", href: "#" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Contact",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
];


import { SidebarNavItem } from "types";

export const sidebarLinks: SidebarNavItem[] = [
  {
    title: "MENU",
    items: [
      { href: "/dashboard", icon: "dashboard", title: "Dashboard" },
      { href: "/medals", icon: "medal", title: "Medals" },
      { href: "/medalists", icon: "users", title: "Medalists" },
      { href: "/results", icon: "chart", title: "Results" },
      { href: "/schedule", icon: "calendar", title: "Schedule" },
      { href: "/events", icon: "calendar_range", title: "Events" },
      { href: "/venues", icon: "map", title: "Venues" },
      { href: "/highlights", icon: "tv", title: "Highlights" },
    ],
  },
  {
    title: "OPTIONS",
    items: [
      { href: "/", icon: "home", title: "Homepage" },
      { href: "/history", icon: "history", title: "History" },
      { href: "/news", icon: "bookOpen", title: "News" },
    ],
  },
];

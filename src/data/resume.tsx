import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import dailyUpdates from "../../public/daily_updates.json";

export const DATA = {
  name: "Rafi Rasheed",
  initials: "T C",
  url: "https://rafirasheed.co",
  location: "Kerala, IN",
  description: "",
  avatarUrl: "/me.png",
  navbar: [
    { href: "https://rafirasheed.co", icon: HomeIcon, label: "Home" },
    { href: "https://rafirasheed.co/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mail@rafirasheed.co",
    tel: "+91 9747 165032",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rafitc",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/rafitc",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/iamRafiRasheed",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  daily_updates: dailyUpdates,
} as const;

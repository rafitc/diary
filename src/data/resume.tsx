import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

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
    tel: "++91 9747 165032",
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
  hackathons: [
    {
      title: "HackDavis",
      dates: "January 01 - 2024",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image: "https://cdn-icons-png.flaticon.com/512/8832/8832880.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
  ],
} as const;

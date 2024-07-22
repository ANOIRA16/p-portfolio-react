import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/icons";
import { FooterType } from "types";

const footer: FooterType = {
  copyright: "2024 by Abdelhamid. Casablanca, Morocco. All rights reserved.",
  socials: [
    // {
    //   name: "X",
    //   href: "https://x.com/anoira16",
    //   icon: TwitterIcon,
    // },
    {
      name: "GitHub",
      href: "https://github.com/ANOIRA16",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/anoira16/",
      icon: LinkedInIcon,
    },
  ],
};

export default footer;

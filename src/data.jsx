import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

import LinkedinLogo from "./assets/svg/linkedIn.svg?react";
import GitHubLogo from "./assets/svg/gitHub.svg?react";

import tailwindLogo from "./assets/svg/tailwindcss.svg";
import reactLogo from "./assets/svg/react.svg";
import jsLogo from "./assets/svg/javascript.svg";
import sassLogo from "./assets/svg/sass.svg";
import htmlLogo from "./assets/svg/html.svg";
import cssLogo from "./assets/svg/css.svg";
import phpLogo from "./assets/svg/php.svg";
import pythonLogo from "./assets/svg/python.svg";
import alpineLogo from "./assets/svg/alpine.svg";

import documentationProject from "./assets/projects/documentationProject.png";
import eshopProject from "./assets/projects/e-shopProject.png";
import clipboardProject from "./assets/projects/clipboardProject.png";
import palidromeProject from "./assets/projects/palidromeProject.png";
import astroProject from "./assets/projects/astroProject.png";
import testimonialsProject from "./assets/projects/testimonialsProject.png";
import loopStudioProject from "./assets/projects/loopStudioProject.png";
import restaurantProject from "./assets/projects/restaurantProject.png";
import shortenLinkProject from "./assets/projects/shortenLinkProject.png";
import bookmarkProject from "./assets/projects/bookmarkProject.png";
import fyloProject from "./assets/projects/fyloProject.png";
import troboneProject from "./assets/projects/troboneProject.png";
import oceaniaProject from "./assets/projects/oceaniaProject.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Problem Solving",
    description:
      "Able to analyze complex situations, identify root causes, and develop effective, practical solutions efficiently.",
  },
  {
    image: propsImg,
    title: "Critical Thinking",
    description:
      "Analyzes problems thoroughly, evaluates multiple solutions, and makes decisions based on logic and evidence.",
  },
  {
    image: stateImg,
    title: "Data-Driven Insight",
    description:
      "Transforms raw data into meaningful insights, identifying patterns and trends to support informed decisions.",
  },
  {
    image: jsxImg,
    title: "UI & UX Design",
    description:
      "Creates interfaces that are both functional and user-friendly, ensuring smooth interactions.",
  },
];

export const EXTERNALLINKS = [
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/manos-chamilakis-092115199/",
    svg: <LinkedinLogo className="fill-current size-6" />,
    className:
      "inline-flex gap-1 transition duration-300 ease-in-out hover:bg-opacity-100 font-semibold text-base text-center text-white items-center border font-medium px-4 py-3 rounded-md bg-blue-700 border-blue-700 hover:bg-white hover:text-blue-600",
  },
  {
    title: "GitHub",
    link: "https://github.com/Chamilos",
    svg: <GitHubLogo className="fill-current size-6" />,
    className:
      "inline-flex gap-1 fill-current transition duration-300 ease-in-out hover:bg-opacity-100 font-semibold text-base text-center text-black items-center border font-medium px-4 py-3 rounded-md bg-white border-black hover:border hover:bg-black hover:text-white",
  },
];

export const EXAMPLES = {
  landingPages: {
    tabTitle: "Landing Page",
    description: "",
    projects: [
      {
        title: "Astro-Project",
        link: "./projects/Astro/index.html",
        img: astroProject,
      },
      {
        title: "Loop Studio",
        link: "./projects/LoopStudio/index.html",
        img: loopStudioProject,
      },
      {
        title: "Bookmark Manager",
        link: "./projects/Bookmark/index.html",
        img: bookmarkProject,
      },
      {
        title: "Fylo File Manager",
        link: "./projects/Fylo/index.html",
        img: fyloProject,
      },
      {
        title: "Shorten Links",
        link: "./projects/ShortenLink/index.html",
        img: shortenLinkProject,
      },
      {
        title: "Clipboard",
        link: "./projects/Clipboard/index.html",
        img: clipboardProject,
      },
    ],
  },
  liveProject: {
    tabTitle: "Live Projects",
    description: "",
    projects: [
      {
        title: "Oceania Maritime",
        link: "https://oceania.solutions/",
        img: oceaniaProject,
      },
    ],
  },
  shopProducts: {
    tabTitle: "Menu Shops",
    description: "",
    projects: [
      {
        title: "Restaurant Menu Project",
        link: "./projects/RestaurantMenu/index.html",
        img: restaurantProject,
      },
      {
        title: "e-Shop",
        link: "./projects/E-shop/index.html",
        img: eshopProject,
      },
      {
        title: "Trobone Product Sales",
        link: "./projects/Trombone/index.html",
        img: troboneProject,
      },
    ],
  },
  miniProjects: {
    tabTitle: "Mini Projects",
    description: "",
    projects: [
      {
        title: "Testimonials Grid",
        link: "./projects/GridTestimonials/index.html",
        img: testimonialsProject,
      },
      {
        title: "Documentation Page",
        link: "./projects/Documentation/index.html",
        img: documentationProject,
      },
      {
        title: "Palidrome Words",
        link: "./projects/PalidromeWord/index.html",
        img: palidromeProject,
      },
    ],
  },
};

export const USED_LOGOS = [
  {
    title: "HTML",
    svg: htmlLogo,
  },
  {
    title: "CSS",
    svg: cssLogo,
  },
  {
    title: "SASS",
    svg: sassLogo,
  },
  {
    title: "Tailwind",
    svg: tailwindLogo,
  },
  {
    title: "JavaScript",
    svg: jsLogo,
  },
  {
    title: "React",
    svg: reactLogo,
  },
  {
    title: "AlpineJs",
    svg: alpineLogo,
  },
];

export const UNUSED_LOGOS = [
  {
    title: "Python",
    svg: pythonLogo,
  },
  {
    title: "PHP",
    svg: phpLogo,
  },
];

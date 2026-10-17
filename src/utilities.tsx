import type { ReactNode } from "react";
import { Braces, Database, GitForkIcon } from "lucide-react";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BsJavascript, BsTypescript } from "react-icons/bs";
import {
  FaConnectdevelop,
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaTools,
} from "react-icons/fa";
import { MdFunctions } from "react-icons/md";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiSupabase,
  SiTanstack,
  SiVercel,
  SiVite,
  SiVitest,
  SiZod,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscDeveloperTools, VscVscode } from "react-icons/vsc";
import fxConverter from "./assets/projects/Fx.png";
import furnitureStore from "./assets/projects/E-commerce.png";
import sneakerStore from "./assets/projects/E-commerce-2.png";
import typingSpeedTest from "./assets/projects/Typing-Speed-Test.png";
import weatherApp from "./assets/projects/weather-app.png";

export type Skill = {
  name: string;
  icon: ReactNode;
};

export type SkillCategory = {
  title: string;
  icon: ReactNode;
  skills: Skill[];
};

export type Theme = "myDark" | "myLight";

export type Project = {
  title: string;
  image: string;
  description: string;
  features?: string[];
  skills: string[];
  links: { live: string; code: string };
};

export const skillCards: SkillCategory[] = [
  {
    title: "frontend",
    icon: <Braces size={24} color="#14AE5C" />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 size={24} color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3 size={24} color="#1572B6" /> },
      { name: "JavaScript", icon: <BsJavascript size={24} color="#F7DF1E" /> },
      { name: "TypeScript", icon: <BsTypescript size={24} color="#3178C6" /> },
      { name: "React", icon: <FaReact size={24} color="#61DAFB" /> },
      {
        name: "Tailwind CSS",
        icon: <BiLogoTailwindCss size={24} color="#38B2AC" />,
      },
    ],
  },
  {
    title: "backend",
    icon: <VscDeveloperTools size={24} color="#14AE5C" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={24} color="#14AE5C" /> },
      { name: "Express.js", icon: <SiExpress size={24} color="#14AE5C" /> },
      {
        name: "REST APIs",
        icon: <FaConnectdevelop size={24} color="#14AE5C" />,
      },
    ],
  },
  {
    title: "database and services",
    icon: <Database size={24} color="#14AE5C" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={24} color="#14AE5C" /> },
      { name: "Supabase", icon: <SiSupabase size={24} color="#14AE5C" /> },
      {
        name: "Supabase Edge Functions",
        icon: <MdFunctions size={24} color="#14AE5C" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={24} color="#14AE5C" />,
      },
    ],
  },
  {
    title: "tools and testing",
    icon: <FaTools size={24} color="#14AE5C" />,
    skills: [
      { name: "GitHub", icon: <FaGithub size={24} /> },
      { name: "Git", icon: <GitForkIcon size={24} /> },
      { name: "Vite", icon: <SiVite size={24} color="#863BFF" /> },
      { name: "Vitest", icon: <SiVitest size={24} color="#FCC72B" /> },
      { name: "Vercel", icon: <SiVercel size={24} color="#8087A2" /> },
      { name: "Zod", icon: <SiZod size={24} color="#4669F6" /> },
      { name: "Figma", icon: <FaFigma size={24} color="#F37036" /> },
      { name: "Postman", icon: <SiPostman size={24} color="#F37036" /> },
      { name: "VS Code", icon: <VscVscode size={24} color="#2196F3" /> },
      {
        name: "TanStack Query",
        icon: <SiTanstack size={24} color="#FF4154" />,
      },
      {
        name: "Framer Motion",
        icon: <TbBrandFramerMotion size={24} color="#38BDF8" />,
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "FX Currency Checker",
    image: fxConverter,
    description:
      "A currency conversion dashboard for checking exchange rates, tracking conversions, and exploring historical market data.",
    features: [
      "Convert between currencies and swap the selected pair",
      "Explore exchange-rate history with interactive charts",
      "Save favorite pairs and log conversions",
    ],
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "PostgreSQL",
      "Supabase",
      "Supabase Edge Functions",
    ],
    links: {
      live: "https://foreign-exchange-checker-zeta.vercel.app/",
      code: "https://github.com/Melodyysol/Foreign-exchange-checker",
    },
  },
  {
    title: "Furniture Store",
    image: furnitureStore,
    description:
      "A furniture storefront concept with product browsing, a shopping cart, and a responsive product showcase. The users use local storage to retain their session.",
    skills: [
      "Local Storage",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Rest APIs",
    ],
    links: {
      live: "https://ecommerce-project-two-brown.vercel.app/",
      code: "https://github.com/Melodyysol/ecommerce-project",
    },
  },
  {
    title: "Sneaker Store",
    image: sneakerStore,
    description:
      "A sneaker storefront concept featuring a searchable product catalog, collections, and shopping cart controls, with Supabase integration.",
    skills: ["Supabase", "React", "TypeScript", "Tailwind CSS", "Rest APIs"],
    links: {
      live: "https://e-commerce-project-fm.vercel.app/",
      code: "https://github.com/Melodyysol/e-commerce-project-fm",
    },
  },
  {
    title: "Weather Now",
    image: weatherApp,
    description:
      "A weather dashboard with city search, current conditions, hourly forecasts, and customizable measurement units.",
    skills: ["HTML", "CSS", "JavaScript", "REST APIs"],
    links: {
      live: "https://melodyysol.github.io/weather-app/",
      code: "https://github.com/Melodyysol/weather-app",
    },
  },
  {
    title: "Typing Speed Test",
    image: typingSpeedTest,
    description:
      "A typing practice app that tracks speed and accuracy with timed and passage-based test modes.",
    skills: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "https://melodyysol.github.io/Frontend-mentor/",
      code: "https://github.com/Melodyysol/Frontend-mentor",
    },
  },
];

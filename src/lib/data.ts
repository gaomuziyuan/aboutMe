import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import hero from "../../public/hero.png";
import dashboard from "../../public/dashboard.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Star Linker - Influencer Marketing Platform",
    description:
      "An SEO-optimized web application with React.js, enabling influencers to boost audience reach and engagement.",
    tags: ["React", "JavaScript", "Redux"],
    imageUrl: dashboard,
    prodUrl: "https://star-linker-frontend.vercel.app/",
  },
  {
    title: "Hero Wallet",
    description:
      "Mobile financial application in partnership with Hero Financial",
    tags: ["React Native", "node.js", "MySQL"],
    imageUrl: hero,
  },
] as const;

export const experiencesData = [
  {
    title: "University of Alberta",
    location: "Edmonton, AB",
    description:
      "I graduated from University of Alberta after two years of study.",
    icon: React.createElement(LuGraduationCap),
    date: "2017/09",
  },
  {
    title: "Research Assistant at University of Alberta",
    location: "Edmonton, AB",
    description:
      "In this role, I specialized in the collection, manipulation, and analysis of greenhouse gas emissions data to inform and optimize CO2 removal technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2017/10 - 2019/03",
  },
  {
    title: "Data Analyst at Bureau Veritas",
    location: "Cold Lake, AB",
    description:
      "At Bureau Veritas, I monitored boiler water systems through the analysis of produced water samples, utilizing real-time data to optimize plant operations.",
    icon: React.createElement(CgWorkAlt),
    date: "2019/04 - 2019/11",
  },
  {
    title: "Data Analyst at Clean Harbors",
    location: "Edmonton, AB",
    description:
      "At Clean Harbors, I developed a pilot-scale drum-boiler heat exchanger for crude oil distillation studies, focusing on data collection and analysis to enhance process efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "2019/11 - 2020/02",
  },
  {
    title: "Northern Alberta Institute of Technology",
    location: "Edmonton, AB",
    description:
      "I graduated after one and a half years of study. I immediately found a job as a software developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021/12",
  },
  {
    title: "Software Developer at LawDepot",
    location: "Edmonton, AB",
    description:
      "At LawDepot, I led the transformation of complex XML-based legal forms into a Vue.js web application, managing the end-to-end development of a custom transpiler.",
    icon: React.createElement(CgWorkAlt),
    date: "2022/03 - 2023/03",
  },
  {
    title: "Full-Stack Developer at AlphaPay",
    location: "Vancouver, BC",
    description:
      "At AlphaPay, I collaboratively developed two web applications using React.js and three cross-platform mobile applications utilizing React Native.",
    icon: React.createElement(CgWorkAlt),
    date: "2023/05 - 2023/12",
  },
  {
    title: "Full-Stack Developer at V-MAX Media",
    location: "Vancouver, BC",
    description:
      "At V-MAX Media, in partnership with Hero Financial, I spearheaded the creation of a financial app using Next.js and React Native.",
    icon: React.createElement(CgWorkAlt),
    date: "2023/12 - present",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "React Native",
  "Flutter",
  "C#",
  "Python",
  "Django",
  "Golang",
  "PHP",
] as const;

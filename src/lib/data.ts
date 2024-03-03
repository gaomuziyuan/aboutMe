import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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

export const experiencesData = [
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
      "At LawDepot, I spearheaded the innovative conversion of complex XML-based legal forms into a streamlined Vue.js web application, overseeing the creation of a custom transpiler that automated this transition. My leadership covered the transpiler project's full development lifecycle, from initial requirements analysis and architectural design to the triumphant deployment in production. I took on the challenge of refactoring intricate XML schemas, employing advanced programming techniques to transform them into scalable and maintainable Vue.js components. In collaboration with a team of skilled software engineers, we developed a robust suite of unit tests, ensuring the reliability and quality of the transpiler logic as well as the Vue.js components it generated.",
    icon: React.createElement(CgWorkAlt),
    date: "2022/03 - 2023/03",
  },
  {
    title: "Full-Stack Developer at AlphaPay",
    location: "Vancouver, BC",
    description:
      "At AlphaPay, I collaboratively developed two web applications using React.js and three cross-platform mobile applications utilizing React Native, I was actively involved in every phase of the app lifecycle, from the initial concept to the final release on the App Store and Google Play. My contributions included the integration of Ingenico and Moneris payment gateways, which not only secured in-app transactions but also heightened customer trust and satisfaction.Furthermore, I spearheaded efforts in database development and optimization, which resulted in a notable 15% improvement in transaction speed alongside a 20% decrease in payment errors.",
    icon: React.createElement(CgWorkAlt),
    date: "2023/05 - 2023/12",
  },
  {
    title: "Full-Stack Developer at V-MAX Media",
    location: "Vancouver, BC",
    description:
      "At V-MAX Media, I led the development of a web/mobile financial application in partnership with Hero Financial, placing a strong emphasis on a mobile-first and test-driven development methodology utilizing Next.js and React Native. My role involved conducting a thorough analysis and design phase to ensure that the application's features perfectly aligned with user needs, significantly boosting performance through strategic API call management. I played a key role in enhancing the app's international financial operations by integrating the Berkeley and Transfermate APIs, thereby offering advanced payment and currency exchange functionalities. Additionally, I was at the forefront of integrating sophisticated databases and designing data warehouse solutions, substantially improving our data storage and retrieval systems. I also automated continuous integration and continuous deployment (CI/CD) pipelines using GitHub Actions, streamlining the deployment process to AWS EC2.",
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

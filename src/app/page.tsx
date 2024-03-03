import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      {/* <Projects /> */}
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

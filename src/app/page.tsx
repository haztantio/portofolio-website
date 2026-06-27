import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import WhatImLearning from "@/components/sections/WhatImLearning";
import SkillsDashboard from "@/components/sections/SkillsDashboard";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import LatestBlogs from "@/components/sections/LatestBlogs";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <WhatImLearning />
      <SkillsDashboard />
      <FeaturedProjects />
      <LatestBlogs />
      <Experience />
      <Achievements />
      <Contact />
    </>
  );
}

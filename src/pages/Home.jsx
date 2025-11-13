import React from "react";
import HeroSection from "../components/HeroSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import GitHubProjectsAnimated from "../components/GitHubProjectsAnimated";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <GitHubProjectsAnimated />
      <ContactSection />
    </>
  );
};

export default Home;

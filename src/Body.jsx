import React from "react";
import Feature from "./landing/Feature";
import ListCard from "./landing/ListCard";
import DocsSection from "./landing/DocsSection";
import Community from "./landing/Community";
import Contribution from "./landing/Contribution";
import Footer from "./landing/Footer";
import { Hero } from "./landing/Hero";
import { HeroParallaxDemo } from "./landing/Hero2";

const Body = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <HeroParallaxDemo />
      <ListCard />
      <DocsSection />
      <Community />
      <Contribution />
      <Footer />
    </div>
  );
};

export default Body;

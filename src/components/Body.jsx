import React from "react";
import { Outlet } from "react-router";
import Navbar from "../landing/Navbar";
import Hero from "../landing/Hero";
import Feature from "../landing/Feature";
// import FeatureList from "../landing/FeatureList";
import ListCard from "../landing/ListCard";
import DocsSection from "../landing/DocsSection";
import TestimonialsSection from "../landing/Community";
import Contribution from "../landing/Contribution";

const Body = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Hero />
      <Feature />
      <ListCard />
      <DocsSection />
      <TestimonialsSection />
      <Contribution />
    </div>
  );
};

export default Body;

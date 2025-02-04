import React from "react";
import { Outlet } from "react-router";
import Navbar from "../landing/Navbar";
import Hero from "../landing/Hero";
import Feature from "../landing/Feature";
import ListCard from "../landing/ListCard";
import DocsSection from "../landing/DocsSection";
import TestimonialsSection from "../landing/Community";
import Contribution from "../landing/Contribution";
import Footer from "../landing/Footer";

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
      <Footer />
    </div>
  );
};

export default Body;

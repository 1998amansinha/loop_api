import React from "react";
import { Outlet } from "react-router";
import Navbar from "../landing/Navbar";
import Hero from "../landing/Hero";
import Feature from "../landing/Feature";
// import FeatureList from "../landing/FeatureList";
import ListCard from "../landing/ListCard";

const Body = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Hero />
      <Feature />
      <ListCard />
    </div>
  );
};

export default Body;

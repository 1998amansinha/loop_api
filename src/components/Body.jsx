import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Feature from "./Feature";

const Body = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Hero />
      <Feature />
    </div>
  );
};

export default Body;

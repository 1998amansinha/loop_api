import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img
          src="https://images.unsplash.com/photo-1648543448880-2650ad713dd5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;

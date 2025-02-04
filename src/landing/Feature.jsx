import React from "react";

const Feature = () => {
  return (
    <section className="bg-neutral py-24 px-6 m-10  md:px-12 lg:px-24 rounded-2xl text-center mx-auto max-w-7xl">
      <h1 className="text-5xl md:text-6xl font-bold text-base-100 leading-tight">
        🚀 Empower Your Development with{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          Loop APIs
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 my-6">
        Discover, Share, and Integrate APIs Seamlessly
      </p>
      <span className="text-base  md:text-lg text-gray-400 mt-6 max-w-3xl mx-auto">
        Loop API is a free, open-source platform where developers can find,
        publish, and use APIs effortlessly. Built to foster innovation, Loop API
        provides tools to simplify API discovery and integration.
      </span>
    </section>
  );
};

export default Feature;

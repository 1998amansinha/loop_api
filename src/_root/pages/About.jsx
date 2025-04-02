import React from "react";
import { TimelineDemo } from "../../components/AboutTime";
import Footer from "../../landing/Footer";

const About = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-200 to-neutral min-h-[50svh] p-20 text-base-100 rounded-b-2xl">
        <h1 className="text-7xl w-1/2">
          Welcome to the World of <span className="text-zinc-700">LoopAPI</span>
        </h1>
        <p className="text-3xl py-5 w-1/2">
          No subscriptions. No paywalls. Just free APIs to fuel your creativity.
          Join LoopAPI and start building today!
        </p>
        <h1 className="text-3xl font-bold">For Developers, By Developers</h1>
      </div>
      <div className="flex flex-col lg:flex-row p-28 gap-10 lg:gap-20">
        {/* Left - Text Section */}
        <div className="flex-1 lg:w-2/3">
          <h1 className="text-6xl font-semibold ">Our Story</h1>
          <p className="text-2xl py-10  font-workSans opacity-60">
            LoopAPI was founded in 2025 by Aman Sinha to solve a common problem
            for beginner developers: finding and accessing free APIs in one
            place. While working on projects, I realized that existing API
            directories were often outdated, lacked proper categorization, or
            required too much effort to find relevant APIs.
          </p>
          <p className="text-2xl  font-workSans opacity-60">
            Fast forward to today, LoopAPI is growing into a developer-first API
            Hub that simplifies API discovery and integration. Our goal is to
            empower developers by making APIs more accessible, well-organized,
            and easy to use—all without paywalls or hidden restrictions.
          </p>
        </div>

        {/* Right - Image Section */}
        <div className="flex-1 lg:w-1/3">
          <img
            src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740815590/Screenshot_2025-03-01_131002_zfz8nw.png"
            alt="LoopAPI About"
            className="w-4/5 ml-28 mt-10 rounded-2xl"
          />
        </div>
      </div>

      <div className="my-20">
        <TimelineDemo />
      </div>

      <div className="p-20">
        <h1 className="text-7xl">What’s the latest at Loop API?</h1>
        <p className="text-3xl my-10">
          Stay up to date on the news related to Loop API next-generation API
          platform
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;

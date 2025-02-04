import React from "react";
import { Link } from "react-router";

const DocsSection = () => {
  return (
    <div className="mt-8 px-12 py-8 min-h-screen bg-[url('https://res.cloudinary.com/do5xzpecm/image/upload/v1738651840/wave-haikei_2_pqzrch.svg')] bg-cover bg-center">
      {/* Heading */}
      <h1 className="text-6xl font-extrabold text-cardTitle mb-2 leading-tight text-center">
        🚀 Unlock the Power of Our API <br />
        <span className="ml-28">Build, Innovate, Scale! ⚡</span>
      </h1>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 p-12">
        {/* Left Section - Text */}
        <div className="md:w-1/3 text-center md:text-left space-y-6">
          <p className="text-2xl text-neutral leading-relaxed">
            Whether you're a <span className="font-semibold">beginner </span> or
            a<span className="font-semibold"> pro developer </span>, our
            <strong> easy-to-follow</strong> docs guide you every step of the
            way. Learn how to{" "}
            <strong>
              integrate seamlessly, optimize performance, and unlock new
              possibilities 🚀
            </strong>{" "}
            with just <span className="text-base-100"> a few </span> lines of
            code.
            <br /> <br />
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-2/3 flex justify-end">
          <img
            src="https://res.cloudinary.com/do5xzpecm/image/upload/v1738641345/Screenshot_2025-02-04_091348_olrasx.png"
            alt="API Docs Preview"
            className="rounded-lg shadow-lg max-w-[50rem] hover:scale-105 transition-all"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl my-2 text-base-100">
          <strong>Start building smarter applications today!</strong>
        </h1>
        <Link to="/docs">
          <button className="bg-primary mt-2 text-base-100 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-md hover:scale-105">
            📖 Get Started Now!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DocsSection;

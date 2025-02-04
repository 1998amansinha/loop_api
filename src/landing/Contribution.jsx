import React from "react";
import { Link } from "react-router";

const Contribution = () => {
  return (
    <section className="bg-neutral py-24 px-6 md:px-12 lg:px-24 rounded-2xl text-center mx-auto max-w-7xl my-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-base-100 leading-loose">
          Help Shape the Future of{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Loop API
          </span>
          <span>🚀</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 my-6">
          Loop API is <strong>open-source</strong>, and we thrive on community
          contributions! Whether you're adding <strong>new features</strong>,
          improving <strong>documentation</strong>, or fixing{" "}
          <strong>bugs</strong>, your contributions empower developers
          worldwide. Join us in making API development more seamless and
          innovative. 💡
        </p>

        {/* Centered Button */}
        <div className="flex justify-center ">
          <Link to="https://github.com/1998amansinha/loop_api">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all text-lg">
              Contribute on GitHub
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                className="w-10 h-10"
                alt="GitHub Logo"
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contribution;

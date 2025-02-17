import React from "react";

const WelcomeHeader = () => {
  return (
    <div className="relative p-[3px] rounded-lg overflow-hidden my-10 ">
      {/* <div className="absolute inset-0 border-[3px] rounded-lg animate-rainbowBorder"></div> */}
      <div className="h-full px-20 py-4 w-full bg-gray-900 rounded-lg flex flex-col justify-center items-center relative z-10">
        <h1 className="text-3xl font-bold text-base-100 animate-fadeIn">
          👋 Welcome to <span className="text-blue-600">LoopAPI</span>!
        </h1>
        <p className="text-gray-400 mt-2 text-lg">
          Explore a vast collection of free APIs, categorized for easy access.
        </p>
      </div>
    </div>
  );
};

export default WelcomeHeader;

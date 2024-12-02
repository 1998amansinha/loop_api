import React from "react";

const GitHubLoginButton = ({ title }) => {
  return (
    <div>
      <button
        type="button"
        className="w-full py-2 px-3 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition duration-200 mt-4  "
      >
        <span className="absolute ">
          <img
            className="w-8 "
            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
            alt=""
          />
        </span>
        <span className="ml-10">Sign {title} with Github</span>
      </button>
    </div>
  );
};

export default GitHubLoginButton;

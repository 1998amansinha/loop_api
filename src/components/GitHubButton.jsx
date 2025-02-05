import React from "react";

const GitHubButton = ({ name }) => {
  return (
    <div>
      <div className="flex bg-neutral rounded-md w-56 hover:bg-slate-600 p-1">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          className="w-10 h-10 object-cover object-center p-2 rounded-md bg-white"
          alt="GitHub Logo"
        />
        <button className="bg-neutral text-base-100 py-2 px-3  rounded-lg hover:bg-gray-700">
          {name}
        </button>
      </div>
    </div>
  );
};

export default GitHubButton;

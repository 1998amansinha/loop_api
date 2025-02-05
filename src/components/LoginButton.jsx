import React from "react";

const LoginButton = ({ label }) => {
  return (
    <button className="p-4 mt-10 bg-white w-full mb-10 font-semibold text-black border border-solid border-black rounded-sm hover:bg-accent hover:text-white">
      {label}
    </button>
  );
};

export default LoginButton;

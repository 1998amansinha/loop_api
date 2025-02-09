import React from "react";

const LoginButton = ({ label, type }) => {
  return (
    <button
      type={type}
      className="p-4 mt-10 bg-white w-full mb-10 font-semibold text-black border border-solid border-black rounded-sm hover:bg-accent hover:text-white"
    >
      {label}
    </button>
  );
};

export default LoginButton;

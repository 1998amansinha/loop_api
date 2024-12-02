import React from "react";

const SignInSignUpButton = ({ title }) => {
  return (
    <div>
      <button
        type="submit"
        className="w-full py-2 px-3 bg-red-600 text-white text-lg font-medium rounded-lg hover:bg-red-700 transition duration-200"
      >
        Sign {title}
      </button>
    </div>
  );
};

export default SignInSignUpButton;

import React from "react";

const LoginButton = ({ label, type, loading }) => {
  return (
    <button
      type={type}
      className="p-4 mt-10 bg-white w-full mb-10 font-semibold text-black border border-solid border-black rounded-sm hover:bg-accent hover:text-white flex items-center justify-center"
      disabled={loading} // Disable button when loading
    >
      {loading ? (
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1739096010/tube-spinner_1_qmtgmm.svg"
          alt="Loading..."
          className="w-8 h-8 "
        />
      ) : (
        label
      )}
    </button>
  );
};

export default LoginButton;

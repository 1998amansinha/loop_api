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
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1739077967/tube-spinner_dggcko.svg"
          alt="Loading..."
          className="w-6 h-6"
        />
      ) : (
        label
      )}
    </button>
  );
};

export default LoginButton;

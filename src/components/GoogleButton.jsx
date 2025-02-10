import React from "react";

const GoogleButton = ({ name, onClick }) => {
  return (
    <div>
      <div className="flex bg-neutral rounded-md w-56  p-1">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
          alt=""
          className="w-10 h-10 object-cover object-center p-2 rounded-md bg-white"
        />
        <button
          className="bg-neutral text-base-100 py-2 px-3  rounded-lg hover:bg-gray-700"
          onClick={onClick}
        >
          {name}
        </button>
      </div>
    </div>
  );
};

export default GoogleButton;

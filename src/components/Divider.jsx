import React from "react";

const Divider = () => {
  return (
    <div>
      <div className="flex items-center w-full ml-7 mt-10">
        <hr className=" border-t border-gray-300 w-1/3" />
        <span className="px-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-bold text-sm whitespace-nowrap">
          OR
        </span>
        <hr className=" border-t border-gray-300 w-1/3" />
      </div>
    </div>
  );
};

export default Divider;

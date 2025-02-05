import React from "react";

const Signup = () => {
  return (
    <div className="mt-5 ml-28 space-y-2">
      <h1 className="text-2xl ">Create an account</h1>
      <p className="text-sm text-gray dark:text-neutral-600">
        Get started with 5000 free API. Open Source
      </p>

      <div className="flex pt-10 space-x-20 ">
        <div className="flex bg-neutral rounded-md w-56  p-1">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
            alt=""
            className="w-10 h-10 object-cover object-center p-2 rounded-md bg-white"
          />
          <button className="bg-neutral text-base-100 py-2 px-3  rounded-lg hover:bg-gray-700">
            Sign up with Google
          </button>
        </div>
        <div className="flex bg-neutral rounded-md w-56 hover:bg-slate-600 p-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            className="w-10 h-10 object-cover object-center p-2 rounded-md bg-white"
            alt="GitHub Logo"
          />
          <button className="bg-neutral text-base-100 py-2 px-3  rounded-lg hover:bg-gray-700">
            Sign up with GitHub
          </button>
        </div>
      </div>

      <div className="flex items-center w-full ml-7">
        <hr className=" border-t border-gray-300 w-1/3" />
        <span className="px-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-bold text-sm whitespace-nowrap">
          OR
        </span>
        <hr className=" border-t border-gray-300 w-1/3" />
      </div>
    </div>
  );
};

export default Signup;

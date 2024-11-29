import { useFormik } from "formik";
import React from "react";

const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (user) => {
      console.log(user);
    },
  });

  return (
    <div className="absolute m-auto left-0 right-0 top-0 -bottom-10 w-1/4 h-[70%]  bg-red-200 p-8 rounded-md shadow-lg opacity-85">
      <h1 className="text-2xl mb-6 text-gray-700 font-bold text-center">
        Sign In
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-700 text-lg mb-1">
            Email<span className="text-red-900">*</span>
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            type="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-lg mb-1"
          >
            Password<span className="text-red-900">*</span>
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter your password"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white text-lg font-medium rounded-lg hover:bg-red-700 transition duration-200"
          >
            Sign in
          </button>
        </div>
        <div className="">
          <button
            type="button"
            className="w-full py-3 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition duration-200 mt-2"
          >
            <span className="absolute ">
              <img
                className="w-8 "
                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
                alt=""
              />
            </span>
            <span className="ml-10">Sign in with Github</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

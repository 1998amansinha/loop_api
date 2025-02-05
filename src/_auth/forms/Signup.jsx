import React from "react";
import GoogleButton from "../../components/GoogleButton";
import GitHubButton from "../../components/GitHubButton";
import Divider from "../../components/Divider";
import Input from "../../components/Input";
import CheckBox from "../../components/CheckBox";
import { Link } from "react-router";
import LoginButton from "../../components/LoginButton";

const Signup = () => {
  return (
    <div className="my-10 ml-28 space-y-2">
      <h1 className="text-2xl ">Create an account</h1>
      <p className="text-sm text-gray dark:text-neutral-600">
        Get started with 5000 free API. Open Source
      </p>
      <div className="flex pt-10 space-x-20 ">
        <GoogleButton name={"Sign up with Google"} />
        <GitHubButton name={"Sign up with GitHub"} />
      </div>
      <Divider />
      <div className="w-4/5  ">
        <Input
          label={"First Name"}
          type={"text"}
          placeholder={"Please enter your first name"}
        />
        <Input
          label={"Last Name"}
          type={"text"}
          placeholder={"Please enter your last name"}
        />
        <Input
          label={"Email Address"}
          type={"email"}
          placeholder={"Please enter your email address"}
        />
        <Input
          label={"Password"}
          type={"password"}
          placeholder={"Please enter your password"}
        />
        <CheckBox />
        <LoginButton label={"SIGN UP WITH EMAIL"} />
      </div>
      <p className="text-lg text-gray-700 my-5">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-gray-500 underline hover:text-gray-800"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Signup;

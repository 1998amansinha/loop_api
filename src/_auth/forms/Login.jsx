import React from "react";
import GoogleButton from "../../components/GoogleButton";
import GitHubButton from "../../components/GitHubButton";
import Divider from "../../components/Divider";
import Input from "../../components/Input";
import CheckBox from "../../components/CheckBox";
import { Link } from "react-router";
import LoginButton from "../../components/LoginButton";

const Login = () => {
  return (
    <div className="my-10 ml-28 space-y-2">
      <h1 className="text-2xl ">Log in to your account</h1>

      <div className="flex pt-10 space-x-20 ">
        <GoogleButton name={"Sign in with Google"} />
        <GitHubButton name={"Sign in with GitHub"} />
      </div>
      <Divider />
      <div className="w-4/5  ">
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

        <LoginButton label={"LOG IN WITH EMAIL"} />
      </div>
      <p className="text-lg text-gray-700 my-5 text-opacity-60 ml-16">
        Don't have an account?{" "}
        <Link
          to="/sign-up"
          className="text-gray-500 underline hover:text-gray-800"
        >
          Sign up here
        </Link>
      </p>
    </div>
  );
};

export default Login;

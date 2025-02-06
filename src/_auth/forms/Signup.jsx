import React, { useState } from "react";
import GoogleButton from "../../components/GoogleButton";
import GitHubButton from "../../components/GitHubButton";
import Divider from "../../components/Divider";
import Input from "../../components/Input";
import CheckBox from "../../components/CheckBox";
import { Link } from "react-router";
import LoginButton from "../../components/LoginButton";
import { authMethods } from "../../firebase/authMethods";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignup = () => {
    authMethods.signup();
  };

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
      <form className="w-4/5" onSubmit={handleSignup}>
        <Input
          label={"First Name"}
          type={"text"}
          placeholder={"Please enter your first name"}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          label={"Last Name"}
          type={"text"}
          placeholder={"Please enter your last name"}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          label={"Email Address"}
          type={"email"}
          placeholder={"Please enter your email address"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label={"Password"}
          type={"password"}
          placeholder={"Please enter your password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CheckBox />
        <LoginButton label={"SIGN UP WITH EMAIL"} />
      </form>
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

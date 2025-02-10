import React, { useState } from "react";
import GoogleButton from "../../components/GoogleButton";
import GitHubButton from "../../components/GitHubButton";
import Divider from "../../components/Divider";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router";
import LoginButton from "../../components/LoginButton";

import { getUserToken, signInFirebase } from "../../firebase/authMethods";
import Cookies from "js-cookie";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseIndex";
import { validationSchema } from "../../constants/validation";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // ✅ Store validation errors
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({}); // Clear previous errors before new attempt

    try {
      // ✅ Validate input using Yup (similar to Signup)
      await validationSchema.validate(
        { email, password },
        { abortEarly: false }
      );

      // ✅ If validation passes, attempt Firebase login
      const user = await signInFirebase({ email, password });
      console.log(user);

      const token = await getUserToken(user);
      if (token) {
        Cookies.set("userToken", token);
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          navigate("/home");
        }
      }
    } catch (error) {
      // ✅ Handle validation errors
      if (error.inner) {
        const formattedErrors = {};
        error.inner.forEach((err) => {
          formattedErrors[err.path] = err.message;
        });
        setErrors(formattedErrors);
      } else {
        setErrors({ form: error.message }); // Handle Firebase errors
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-10 ml-28 space-y-2">
      <h1 className="text-2xl">Log in to your account</h1>

      <div className="flex pt-10 space-x-20">
        <GoogleButton name={"Sign in with Google"} />
        <GitHubButton name={"Sign in with GitHub"} />
      </div>
      <Divider />

      <form className="w-4/5" onSubmit={handleSignIn}>
        <div>
          <Input
            label="Email Address"
            type="email"
            placeholder="Please enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <Input
            label="Password"
            type="password"
            placeholder="Please enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <LoginButton
          type="submit"
          label={"SIGN UP WITH EMAIL"}
          disabled={loading}
        />

        {errors.form && (
          <p className="text-red-500 text-sm mt-2">{errors.form}</p>
        )}
      </form>

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

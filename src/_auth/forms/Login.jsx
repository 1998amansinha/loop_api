import React, { useState } from "react";
import GoogleButton from "../../components/GoogleButton";
import GitHubButton from "../../components/GitHubButton";
import Divider from "../../components/Divider";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router";
import {
  getUserToken,
  gitHubAuthentication,
  googleAuthentication,
  signInFirebase,
} from "../../firebase/authMethods";
import Cookies from "js-cookie";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseIndex";
import { loginValidationSchema } from "../../constants/validation";
import Loader from "../../components/Loader";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/slice/userSlice";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("1998amansinha@gmail.com");
  const [password, setPassword] = useState("Niharika@80");
  const [errors, setError] = useState({}); // ✅ Store validation errors
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({}); // Reset errors before validation

    try {
      // Validate input using Yup
      await loginValidationSchema.validate(
        { email, password },
        { abortEarly: false }
      );

      // Firebase login attempt
      const user = await signInFirebase({ email, password });

      const token = await getUserToken(user);
      if (token) {
        localStorage.setItem("userToken", token);
        Cookies.set("userToken", token);
      }
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const { firstName, lastName } = userDoc.data();
        const serializedUser = {
          uid: user.uid,
          firstName,
          lastName,
          email: user.email,
        };
        dispatch(addUser(serializedUser));
      }
      toast.success("Login successfull!");
      navigate("/home");
    } catch (error) {
      setLoading(false); // Ensure loading resets on error
      if (error.inner) {
        // Yup validation errors
        const formattedErrors = {};
        error.inner.forEach((err) => {
          formattedErrors[err.path] = err.message;
        });
        setError(formattedErrors);
      } else {
        toast.error("Login failed. Please try again.");
        setError({ form: error.message });
      }
    } finally {
      setLoading(false); // Ensure loading resets after success/failure
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleAuthentication(dispatch);
      const { user, token } = result;

      if (token) {
        localStorage.setItem("userToken", token);
        Cookies.set("userToken", token);
        dispatch(
          addUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
          })
        );
        toast.success("Login successfull!");
        navigate("/home");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Error signing in with Google", error);
    }
  };

  const handleGitHubSignIn = async () => {
    try {
      const result = await gitHubAuthentication(dispatch);
      const { user, token } = result;

      if (token) {
        localStorage.setItem("userToken", token);
        Cookies.set("userToken", token);
        dispatch(
          addUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
          })
        );
        toast.success("Login successfull!");
        navigate("/home");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <div className="my-10 ml-28 space-y-2">
      <h1 className="text-2xl">Log in to your account</h1>

      <div className="flex pt-10 space-x-20">
        <GoogleButton
          name={"Sign in with Google"}
          onClick={handleGoogleSignIn}
        />
        <GitHubButton
          name={"Sign in with GitHub"}
          onClick={handleGitHubSignIn}
        />
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

        {errors.form && (
          <p className="text-red-500 text-md font-bold mt-5">{errors.form}</p>
        )}

        <button
          type="submit"
          className="p-4 mt-10 bg-white w-full mb-10 font-semibold text-black border border-solid border-black rounded-sm hover:bg-accent hover:text-white flex items-center justify-center"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2 w-full">
              <Loader /> Loading...
            </div>
          ) : (
            "SIGN IN WITH EMAIL"
          )}
        </button>
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

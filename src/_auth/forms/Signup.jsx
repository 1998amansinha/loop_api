import React, { useState } from "react";
import GoogleButton from "../../components/GoogleButton";
import GitHubButton from "../../components/GitHubButton";
import Divider from "../../components/Divider";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router";
import LoginButton from "../../components/Loader";
import { validationSchema } from "../../constants/validation";
import { getUserToken, SignUpFirebase } from "../../firebase/authMethods";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/slice/userSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true); // Prevent multiple clicks
    try {
      // Validate form input with Yup
      await validationSchema.validate(
        { firstName, lastName, email, password },
        { abortEarly: false }
      );
      setErrors({}); // Clear previous errors if validation passes

      // Create user with Firebase Authentication
      const user = await SignUpFirebase({
        firstName,
        lastName,
        email,
        password,
      });
      const token = await getUserToken(user);
      if (token) {
        localStorage.setItem("userToken", token);
        Cookies.set("userToken", token);
      }
      // Dispatch only serializable data
      const serializedUser = {
        uid: user.uid,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      dispatch(addUser(serializedUser));
      navigate("/home");
    } catch (error) {
      //  Handle validation errors or Firebase errors
      if (error.inner) {
        const formattedErrors = {};
        error.inner.forEach((err) => {
          formattedErrors[err.path] = err.message;
        });
        setErrors(formattedErrors);
      } else {
        throw new Error("Error saving user to Firestore: " + error.message);
      }
    } finally {
      setLoading(false); // ✅ Reset loading state after success or failure
    }
  };

  return (
    <div className="my-10 ml-28 space-y-2">
      <h1 className="text-2xl">Create an account</h1>
      <p className="text-sm text-gray dark:text-neutral-600">
        Get started with 5000 free API. Open Source
      </p>
      <div className="flex pt-10 space-x-20">
        <GoogleButton name={"Sign up with Google"} />
        <GitHubButton name={"Sign up with GitHub"} />
      </div>
      <Divider />
      <form className="w-4/5" onSubmit={handleSignup}>
        <div>
          <Input
            label="First Name"
            type="text"
            placeholder="Please enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && (
            <p className="text-red-500 text-md">{errors.firstName}</p>
          )}
        </div>

        <div>
          <Input
            label="Last Name"
            type="text"
            placeholder="Please enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && (
            <p className="text-red-500 text-md">{errors.lastName}</p>
          )}
        </div>

        <div>
          <Input
            label="Email Address"
            type="email"
            placeholder="Please enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-md">{errors.email}</p>
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
            <p className="text-red-500 text-md">{errors.password}</p>
          )}
        </div>

        <LoginButton
          type="submit"
          label="SIGN UP WITH EMAIL"
          loading={loading}
        />
        {errors.form && (
          <p className="text-red-500 text-sm mt-2">{errors.form}</p>
        )}
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

import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "./firebaseIndex";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/slice/userSlice";

//  Function to register a new user using Firebase Authentication
export const SignUpFirebase = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  try {
    // Create a new user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (user) {
      // Store user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        uid: user.uid,
      });
    }
    return user;
  } catch (error) {
    // Handle signup errors
    console.error("Signup error:", error.message);
    throw new Error("Signup error: " + error.message);
  }
};

//  Function to log in a user with email and password
export const signInFirebase = async ({ email, password }) => {
  try {
    // Sign in the user using Firebase Authentication
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

//  Function to log out the user
export const signOutFirebase = async () => {
  try {
    await signOut(auth); // Firebase sign-out function
    Cookies.remove("userToken"); // Remove authentication token from cookies
  } catch (error) {
    console.error("Sign out error:", error.message);
  }
};

//  Custom hook to listen for authentication changes
export const useAuthListener = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userToken = Cookies.get("userToken");

    // Redirect logic based on authentication status
    if (userToken && ["/", "/login", "/sign-up"].includes(location.pathname)) {
      navigate("/home");
    }
    if (!userToken && ["/home", "/docs"].includes(location.pathname)) {
      dispatch(removeUser());
      navigate("/login");
    }

    // Firebase authentication state listener
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          // Fetch user details from Firestore
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const { firstName, lastName, email, displayName } = userDoc.data();
            dispatch(
              addUser({
                uid: user.uid,
                email,
                firstName,
                lastName,
                displayName,
              })
            );
          }
        } else {
          // Ensure the token is removed on logout
          Cookies.remove("userToken");
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    });

    return () => unSubscribe(); // Cleanup authentication listener
  }, [dispatch, navigate, location.pathname]);
};

//  Function to handle Google authentication
export const googleAuthentication = async (dispatch) => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result?.user;

    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      // Store user data in Firestore if it doesn't already exist
      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          email: user.email,
          displayName: user.displayName,
        });
      }

      // Dispatch user data to Redux store
      dispatch(
        addUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        })
      );
    }

    return { user, token };
  } catch (error) {
    console.error("Google authentication error:", error);
    Cookies.remove("userToken"); // Ensure token is removed on failure
    throw new Error("Google authentication failed.");
  }
};

//  Function to handle GitHub authentication
export const gitHubAuthentication = async (dispatch) => {
  try {
    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result?.user;

    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      // Store user data in Firestore if it doesn't already exist
      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          email: user.email,
          displayName: user.displayName,
        });
      }

      // Dispatch user data to Redux store
      dispatch(
        addUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        })
      );
    }

    return { user, token };
  } catch (error) {
    console.error("GitHub authentication error:", error);
    Cookies.remove("userToken"); // Ensure token is removed on failure
    throw new Error("GitHub authentication failed.");
  }
};

//  Function to retrieve the user's authentication token and store it in cookies
export const getUserToken = async (user) => {
  try {
    const token = await user.getIdToken();

    // Store the token in cookies with secure options
    Cookies.set("userToken", token, {
      expires: 7, // Token expires in 7 days
      secure: true,
      sameSite: "strict",
    });

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

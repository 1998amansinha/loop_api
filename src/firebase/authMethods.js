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

export const SignUpFirebase = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  try {
    //  Create user with Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (user) {
      //  Store user info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        uid: user.uid,
      });
    }
    return user;
  } catch (error) {
    //  Handle Firebase errors
    console.error("Signup error:", error.message);
    throw new Error("Signup error : ", error.message);
  }
};

export const signInFirebase = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
};

export const signOutFirebase = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error.message);
  }
};

export const useAuthListener = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userToken = Cookies.get("userToken");

    // 🚀 Redirect logic
    if (userToken && ["/", "/login", "/sign-up"].includes(location.pathname)) {
      navigate("/home");
    }

    if (
      !userToken &&
      ["/home", "/docs", "/support", "/about"].includes(location.pathname)
    ) {
      dispatch(removeUser());
      navigate("/login");
    }

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
          Cookies.remove("userToken"); // Ensure token is removed on logout
          // dispatch(removeUser());
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    });

    return () => unSubscribe(); // Cleanup listener
  }, [dispatch, navigate, location.pathname]);
};

export const googleAuthentication = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result?.user;

    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        // Create a new user document if it doesn't exist
        await setDoc(userDocRef, {
          email: user.email,
          displayName: user.displayName,
        });
      }
    } else {
      Cookies.remove("userToken");
    }

    return { user, token };
  } catch (error) {
    console.error("Google authentication error:", error);
    Cookies.remove("userToken");
    throw new Error("Google authentication failed.");
  }
};

export const getUserToken = async (user) => {
  try {
    const token = await user.getIdToken();
    Cookies.set("userToken", token, {
      expires: 7,
      secure: true,
      sameSite: "strict",
    });
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

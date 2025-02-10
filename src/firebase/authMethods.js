import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "./firebaseIndex";
import Cookies from "js-cookie";

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

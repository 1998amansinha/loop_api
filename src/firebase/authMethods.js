import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "./firebaseIndex";

export const SignUpFirebase = async ({
  firstName,
  lastName,
  email,
  password,
  setErrors,
}) => {
  try {
    // ✅ Create user with Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (user) {
      // ✅ Store user info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        uid: user.uid,
      });
    }
    return user;
  } catch (error) {
    // ✅ Handle Firebase errors
    console.error("Signup error:", error.message);
    setErrors(error.message);
  }
};

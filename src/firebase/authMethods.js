import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseIndex";

export const authMethods = {
  signup: async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.error(error.message);
    }
  },
  sign: () => {},
  signout: () => {},
};

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth } from "./firebase.utils";

export const register = async ({ email, password }) => {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential.user);

      window.location.replace("http://localhost:3000/home");
      return userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
    });
};

export const login = async ({ email, password }) => {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential.user);

      window.location.replace("http://localhost:3000/home");
      return userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
    });
};

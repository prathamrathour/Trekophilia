import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHWIbRmkxciQYWJ9guJOeQ9hT7puIed0A",
  authDomain: "trekophilia-efea8.firebaseapp.com",
  projectId: "trekophilia-efea8",
  storageBucket: "trekophilia-efea8.appspot.com",
  messagingSenderId: "603683155942",
  appId: "1:603683155942:web:904850601babaa276eb027",
  measurementId: "G-NW1DNSXMZ4",
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

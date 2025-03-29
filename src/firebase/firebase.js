import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNSXSBPyIkO-sQxBX8Ega3HvmlIxuUmMY",
  authDomain: "zeroprime-b4481.firebaseapp.com",
  projectId: "zeroprime-b4481",
  storageBucket: "zeroprime-b4481.firebasestorage.app",
  messagingSenderId: "64497076034",
  appId: "1:64497076034:web:7fe76796f7cf9c189feadb",
  measurementId: "G-7GN8JWPV24",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };

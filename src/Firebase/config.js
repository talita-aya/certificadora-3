import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-cERc7EElMVqp5L_VMgnfPPzJfmQ0MBM",
  authDomain: "certificadora3-586da.firebaseapp.com",
  projectId: "certificadora3-586da",
  storageBucket: "certificadora3-586da.appspot.com",
  messagingSenderId: "319026962672",
  appId: "1:319026962672:web:dbeb08a62f3f66ad926235"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth };
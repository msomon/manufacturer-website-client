// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyANtg3HeTszZVurFea34EkjZfpuIiYtP0g",
  authDomain: "electronics-manufacturer.firebaseapp.com",
  projectId: "electronics-manufacturer",
  storageBucket: "electronics-manufacturer.appspot.com",
  messagingSenderId: "110630753459",
  appId: "1:110630753459:web:aa95a9705f07b09b1a0cc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
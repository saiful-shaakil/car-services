// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPfkd8R181ZFAOjdpszLYI9XZ3_hT2h1A",
  authDomain: "car-genius-40423.firebaseapp.com",
  projectId: "car-genius-40423",
  storageBucket: "car-genius-40423.appspot.com",
  messagingSenderId: "173963330586",
  appId: "1:173963330586:web:3b1af9b7bcc88b0483fda3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

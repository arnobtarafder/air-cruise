// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBLf1H1QVYioq68lpYxXwtPDFm-JGzHKEY",
//   authDomain: "air-cruise.firebaseapp.com",
//   projectId: "air-cruise",
//   storageBucket: "air-cruise.appspot.com",
//   messagingSenderId: "43938408952",
//   appId: "1:43938408952:web:87925716d57745e316ce0d"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
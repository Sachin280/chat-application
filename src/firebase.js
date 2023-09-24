import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZkFUg4TJyMgEGAKztXIkZdRQtu6paZY0",
  authDomain: "chat-56abd.firebaseapp.com",
  projectId: "chat-56abd",
  storageBucket: "chat-56abd.appspot.com",
  messagingSenderId: "394991382499",
  appId: "1:394991382499:web:58bee8b8adb285e91f7ad6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore()











// import { initializeApp, getApps } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "global-chat-80ab3.firebaseapp.com",
//   projectId: "global-chat-80ab3",
//   storageBucket: "global-chat-80ab3.appspot.com",
//   messagingSenderId: "405392556419",
//   appId: "1:405392556419:web:562d012b108561b8be76b6",
// };

// // Initialize Firebase
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps();
// const auth = getAuth();
// const db = getFirestore();
// const provider = new GoogleAuthProvider();

// export { db, auth, provider };





// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "global-chat-80ab3.firebaseapp.com",
//   projectId: "global-chat-80ab3",
//   storageBucket: "global-chat-80ab3.appspot.com",
//   messagingSenderId: "405392556419",
//   appId: "1:405392556419:web:562d012b108561b8be76b6",
// };

// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

// const db = app.firestore();
// const auth = app.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { db, auth, provider };

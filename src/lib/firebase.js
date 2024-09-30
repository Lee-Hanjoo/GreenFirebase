import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBta55VKM4OgBEwxdWGB-suN-3ONoozRck",
  authDomain: "test-94b65.firebaseapp.com",
  projectId: "test-94b65",
  storageBucket: "test-94b65.appspot.com",
  messagingSenderId: "456650788979",
  appId: "1:456650788979:web:df4b5cfa7a6d2114ea1a06",
  measurementId: "G-BEH6BCHBVB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app);
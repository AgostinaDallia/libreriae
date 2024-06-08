import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMw7ioJ_XncbADsSPuUnQmHIYZyQZ6Bls",
  authDomain: "estimulo-coder.firebaseapp.com",
  projectId: "estimulo-coder",
  storageBucket: "estimulo-coder.appspot.com",
  messagingSenderId: "934530351335",
  appId: "1:934530351335:web:3820c24dac1eb7de2ea242"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db


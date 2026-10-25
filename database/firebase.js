import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCWQI0isx9BtYEIOEWQrwQ4Bp-uqpItgdM",
  authDomain: "bookloop-b965a.firebaseapp.com",
  databaseURL:
    "https://bookloop-b965a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookloop-b965a",
  storageBucket: "bookloop-b965a.firebasestorage.app",
  messagingSenderId: "93204128579",
  appId: "1:93204128579:web:1da275117931ed667dc5f6",
};

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getDatabase(firebaseApp);
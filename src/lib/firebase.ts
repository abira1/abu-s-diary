import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCrYHCC6fvYQm06NsLKrzc8q2fmq568dMo",
  authDomain: "abu-s-diary.firebaseapp.com",
  projectId: "abu-s-diary",
  storageBucket: "abu-s-diary.firebasestorage.app",
  messagingSenderId: "157146813051",
  appId: "1:157146813051:web:e9a878bd481866e1c188de",
  measurementId: "G-ZRMGNM923R",
  databaseURL: "https://abu-s-diary-default-rtdb.firebaseio.com"
};

let database, auth;

try {
  const app = initializeApp(firebaseConfig);
  database = getDatabase(app);
  auth = getAuth(app);
} catch (error) {
  console.error("Firebase initialization error:", error);
  // Optionally, you can set default values to null here, but it's unnecessary as database and auth will be undefined in case of error.
  database = null;
  auth = null;
}

export { database, auth };

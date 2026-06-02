import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGaZyWsSTTnPUMpMUG4QJU7jYW7NX1GHk",
  authDomain: "school-wev.firebaseapp.com",
  projectId: "school-wev",
  storageBucket: "school-wev.firebasestorage.app",
  messagingSenderId: "297116743699",
  appId: "1:297116743699:web:de913f49996532859227e6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
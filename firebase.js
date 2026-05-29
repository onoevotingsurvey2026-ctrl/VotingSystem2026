import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx2zElYOCWUmYzKp5p-JM6jUc7Gr5hA6o",
  authDomain: "votingsystem2026-ac105.firebaseapp.com",
  projectId: "votingsystem2026-ac105",
  storageBucket: "votingsystem2026.appspot.com",
  messagingSenderId: "640142600393",
  appId: "1:640142600393:web:1e37148197ff33d77b0518",
  measurementId: "G-09YQ30C8VK"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

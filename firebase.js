import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_REAL_KEY_FROM_FIREBASE",
  authDomain: "votingsystem2026-ac105.firebaseapp.com",
  projectId: "votingsystem2026-ac105",
  storageBucket: "votingsystem2026-ac105.appspot.com",
  messagingSenderId: "640142600393",
  appId: "1:640142600393:web:1e37148197ff33d77b0518"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

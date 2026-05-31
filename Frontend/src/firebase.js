import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuxQr23Frg7cxfzOaKokCiCakI_ykm_j4",
  authDomain: "apnagpt-de5f1.firebaseapp.com",
  projectId: "apnagpt-de5f1",
  storageBucket: "apnagpt-de5f1.firebasestorage.app",
  messagingSenderId: "365834307000",
  appId: "1:365834307000:web:91f058fdd8bddcc3707b4d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
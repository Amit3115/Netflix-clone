import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBYZsUS_ZV7Zp0wlz2eWt8dB6A0Z2ROBLk",
  authDomain: "netflix-clone-9ae7f.firebaseapp.com",
  projectId: "netflix-clone-9ae7f",
  storageBucket: "netflix-clone-9ae7f.appspot.com",
  messagingSenderId: "444647218344",
  appId: "1:444647218344:web:ae94b4b341fc853dc5f69d",
  measurementId: "G-913GFD52XB"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
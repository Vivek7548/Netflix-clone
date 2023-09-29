
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBAY0oyVnlUmR8Sx273zjL7eW7AwHeqj8U",
  authDomain: "netflix-project-9784a.firebaseapp.com",
  projectId: "netflix-project-9784a",
  storageBucket: "netflix-project-9784a.appspot.com",
  messagingSenderId: "736593284384",
  appId: "1:736593284384:web:ece78b21defdf0137d1b45",
  measurementId: "G-17LE97YNVN"
};


 const app = initializeApp(firebaseConfig);
 export const firebaseAuth = getAuth(app)
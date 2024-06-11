import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_PROJECT_ID + ".firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROJECT_ID + ".appspot.com",
  messagingSenderId: "369218459962",
  appId: "1:369218459962:web:9cc941fd590bc86e165803"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;

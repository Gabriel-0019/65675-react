import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5pmBOmDLHaxJM6Kgpu2I0Rj6lSrNiuDU",
  authDomain: "comision-65675-ecomerce.firebaseapp.com",
  projectId: "comision-65675-ecomerce",
  storageBucket: "comision-65675-ecomerce.firebasestorage.app",
  messagingSenderId: "76926231263",
  appId: "1:76926231263:web:3f8896abaf821fa1dd7f6a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

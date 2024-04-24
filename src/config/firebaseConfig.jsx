
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getStorage} from 'firebase/storage'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnLShmprjprIgv_OMTCPN3Rq-JcBbe4CY",
  authDomain: "gestion-app-back-practica.firebaseapp.com",
  projectId: "gestion-app-back-practica",
  storageBucket: "gestion-app-back-practica.appspot.com",
  messagingSenderId: "370083880903",
  appId: "1:370083880903:web:506300867f8dcdef06c3e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initDataBase = getFirestore(app);
export const initStorage = getStorage(app);
export const initAuth = getAuth(app);
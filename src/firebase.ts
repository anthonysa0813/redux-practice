import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDL9GSwK5vrQ8eNqV1CwX8sF0rG4ere-_s",
  authDomain: "carrito-compra-b2f10.firebaseapp.com",
  projectId: "carrito-compra-b2f10",
  storageBucket: "carrito-compra-b2f10.appspot.com",
  messagingSenderId: "405318329112",
  appId: "1:405318329112:web:28eb5188b39ca1aafdf46d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const autentication = getAuth(app)
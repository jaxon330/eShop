import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCTPLo9ucqfENTrJ2vRhaA8OwVIeTbGZfc",
  authDomain: "eshop-29833.firebaseapp.com",
  projectId: "eshop-29833",
  storageBucket: "eshop-29833.appspot.com",
  messagingSenderId: "150176356171",
  appId: "1:150176356171:web:cf110652ace56e52297ace",
  measurementId: "G-X8WT5YK9BP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

export { db, auth };


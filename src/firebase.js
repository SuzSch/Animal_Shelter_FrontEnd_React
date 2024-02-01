import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDzWcNBJPxBC1SSRaNRLhw5yodMo1a_h9I",
  authDomain: "future-pet-portal.firebaseapp.com",
  projectId: "future-pet-portal",
  storageBucket: "future-pet-portal.appspot.com",
  messagingSenderId: "839774039619",
  appId: "1:839774039619:web:72aa7fcbe33ca05ed82ef6",
  measurementId: "G-F1RPV3KS06"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
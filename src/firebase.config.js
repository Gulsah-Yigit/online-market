import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDe_v90vOuJpXI7_a4XX2lmRamrzZO94tc",
  authDomain: "techno-market-f496d.firebaseapp.com",
  projectId: "techno-market-f496d",
  storageBucket: "techno-market-f496d.appspot.com",
  messagingSenderId: "369735869032",
  appId: "1:369735869032:web:b4ae8515462ffba2c951dd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

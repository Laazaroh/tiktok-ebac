import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyC7-v3Vr6mGyg5UkMO3ezM_UaRSjSsGKtA",
  authDomain: "tiktok-clone-a93a2.firebaseapp.com",
  projectId: "tiktok-clone-a93a2",
  storageBucket: "tiktok-clone-a93a2.appspot.com",
  messagingSenderId: "1033097035376",
  appId: "1:1033097035376:web:e90b45ba870eeaa46d7eb5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

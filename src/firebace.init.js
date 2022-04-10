import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBvB3nrIgw_9GHV2TcWtN5THvNUOn2iR1I",
  authDomain: "car-service-5856b.firebaseapp.com",
  projectId: "car-service-5856b",
  storageBucket: "car-service-5856b.appspot.com",
  messagingSenderId: "204952805482",
  appId: "1:204952805482:web:3537ad70e1db8c34226a13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDIG02XCe5HCFbqipFSyNCaqy2l9ASMnZg",
  authDomain: "andina-labrada.firebaseapp.com",
  projectId: "andina-labrada",
  storageBucket: "andina-labrada.firebasestorage.app",
  messagingSenderId: "567655070873",
  appId: "1:567655070873:web:22c84b257c45c1dda1cc08",
  measurementId: "G-8NBNHNRG3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
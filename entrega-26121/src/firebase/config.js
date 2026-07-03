import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// Comentarios.
const firebaseConfig = {
    apiKey: "AIzaSyAeGUUs6hEiOYj4MFBOHnIV5Y9u39bPt5I",
    authDomain: "entrega-final-26121.firebaseapp.com",
    projectId: "entrega-final-26121",
    storageBucket: "entrega-final-26121.firebasestorage.app",
    messagingSenderId: "762176673658",
    appId: "1:762176673658:web:00f0bb26dd6601521568c3"
};
const app = initializeApp(firebaseConfig);
// Si agregaste Analytics verás esto además.
const analytics = getAnalytics(app);


export const db = getFirestore(app)
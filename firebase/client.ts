import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCjztuKcLfgwXhoTMTwZxxDf9Dh3k1RAqM",
  authDomain: "prepwise-8c1a7.firebaseapp.com",
  projectId: "prepwise-8c1a7",
  storageBucket: "prepwise-8c1a7.firebasestorage.app",
  messagingSenderId: "86742897885",
  appId: "1:86742897885:web:0c8a60fe55661b15b83734"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
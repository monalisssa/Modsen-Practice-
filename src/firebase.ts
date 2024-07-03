import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.MAP_APP_FIREBASE_API_KEY,
  authDomain: process.env.MAP_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.MAP_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.MAP_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.MAP_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.MAP_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getMessaging, isSupported } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyBA8lgGtRSa88KEc1X_0BhHm0Xfeh4eOfg",
    authDomain: "djowyett.firebaseapp.com",
    databaseURL: "https://djowyett-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "djowyett",
    storageBucket: "djowyett.appspot.com",
    messagingSenderId: "478289729883",
    appId: "1:478289729883:web:fe425b46f57ec57cb2627e"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const messaging = async ()=> await isSupported() && getMessaging(app);
export const msging = getMessaging(app);

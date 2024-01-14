// Importez uniquement ce qui est nécessaire
/*import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBA8lgGtRSa88KEc1X_0BhHm0Xfeh4eOfg",
  authDomain: "djowyett.firebaseapp.com",
  databaseURL: "https://djowyett-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "djowyett",
  storageBucket: "djowyett.appspot.com",
  messagingSenderId: "478289729883",
  appId: "1:478289729883:web:5ddcc13846b3074db2627e"
};

// Initialisez votre application Firebase
const app = initializeApp(firebaseConfig);

// Obtenez l'instance de messaging à partir de votre application
const messaging = getMessaging(app);

// Gérez les messages en arrière-plan
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Personnalisez la notification ici
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  // Affichez la notification
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
*/

importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyBA8lgGtRSa88KEc1X_0BhHm0Xfeh4eOfg",
  authDomain: "djowyett.firebaseapp.com",
  databaseURL: "https://djowyett-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "djowyett",
  storageBucket: "djowyett.appspot.com",
  messagingSenderId: "478289729883",
  appId: "1:478289729883:web:fe425b46f57ec57cb2627e"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const soundOptions = {
    sound: '/Message-Iphone.mp3'
  };
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.jpg',
    sound: soundOptions,
  };
  

  self.registration.showNotification(notificationTitle, notificationOptions);
});
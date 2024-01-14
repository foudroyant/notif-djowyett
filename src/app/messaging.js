import {getToken, onMessage,} from 'firebase/messaging'
import {doc, setDoc} from 'firebase/firestore'
import { messaging, msging, db } from './firebase'
const VAPI_KEY = "BBZMYwRogCLS7Pi59BypD1ez306_g5wsCJaU3LXadmZ5JGn1CwdcY9T1DcOUdlagzJOuylGJeyc8qzsfBz7V3ug"

export async function requestNotificationsPermissions(){
    console.log("Request Notification")
    const permission = await Notification.requestPermission()
    if(permission=="granted"){
        await saveMessagingDeviceToken()
    }else{
        console.log("Pas de permission de notification")
    }
}

 function playNotificationSound() {
    const audio = new Audio('/Message-Iphone.mp3');
    audio.play();
    console.log("PLay sound")
  }

export async function saveMessagingDeviceToken(uui){
    const msg = await messaging()
    onMessage(msg, (payload) => {
        console.log('Message received. ', payload);
        playNotificationSound();
      });
    const fcmToken = await getToken(msg, {vapidKey : VAPI_KEY})
    if(fcmToken){
        console.log("Device Token : "+fcmToken)
        //SAVE TOKEN TO FIRESTORE
        const fcmRef = doc(db, "fcmToken", uui)
        await setDoc(fcmRef, {fcmToken}) //Overwtites document if already exists
    }else{
        requestNotificationsPermissions()
    }
}
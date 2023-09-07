importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
// import { getMessaging,onBackgroundMessage  } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-messaging-sw.js";
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyB3jgj1BmeLLtET6UETMMqAIWttfKv013s",
    authDomain: "myfoodchoice-7f6a0.firebaseapp.com",
    projectId: "myfoodchoice-7f6a0",
    storageBucket: "myfoodchoice-7f6a0.appspot.com",
    messagingSenderId: "626716661579",
    appId: "1:626716661579:web:7464ca549524e9f3957ace",
    measurementId: "G-CV402Q1KB3"
  };
  
  // const messaging = getMessaging(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();



  messaging. onBackgroundMessage(payload => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    // const notificationTitle = 'Background Message Title';
    // const notificationOptions = {
    //   body: 'Background Message body.',
    // };
  
    // self.registration.showNotification(notificationTitle,
    //   notificationOptions);
  });
  
  // messaging.onBackgroundMessage((payload)=> {
  //   console.log("Received background message ", payload);
 
  //   const notificationTitle = payload.notification.title;
  //   const notificationOptions = {
  //     body: payload.notification.body,
  //   };
 
  //   self.registration.showNotification(notificationTitle, notificationOptions);
  // });
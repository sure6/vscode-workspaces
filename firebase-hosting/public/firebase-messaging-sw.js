importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

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
  

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  messaging.onBackgroundMessage(function(payload) {
    console.log("Received background message ", payload);
 
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
 
    self.registration.showNotification(notificationTitle, notificationOptions);
  });

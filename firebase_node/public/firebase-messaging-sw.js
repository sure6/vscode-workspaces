importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAfliBqZ8Jtl-mU4FCkZd3ajoOrAjv6l3Y",
    authDomain: "myfoodchoice-1529f.firebaseapp.com",
    projectId: "myfoodchoice-1529f",
    storageBucket: "myfoodchoice-1529f.appspot.com",
    messagingSenderId: "211637840328",
    appId: "1:211637840328:web:348e88e80c2b6bdc6c38fd",
    measurementId: "G-BQCMV13HZT"
  };
  

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();


  messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwt_Zr6XZ2SD6ki3IkqE3zQPcm6MMc7vdaDlCNLJVo&s'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
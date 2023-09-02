  
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
  messaging.requestPermission().then(function() {
     //getToken(messaging);
     return messaging.getToken();
  }).then(function(token){
    console.log("token: ",token);
  }).catch(function(err) {
  console.log('Permission denied', err);
});


messaging.onMessage(function(payload){
 console.log('onMessage: ',payload);
});

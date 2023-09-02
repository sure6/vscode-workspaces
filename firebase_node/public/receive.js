// Initialize Firebase
//   const firebaseConfig = {
//     apiKey: "AIzaSyAfliBqZ8Jtl-mU4FCkZd3ajoOrAjv6l3Y",
//     authDomain: "myfoodchoice-1529f.firebaseapp.com",
//     projectId: "myfoodchoice-1529f",
//     storageBucket: "myfoodchoice-1529f.appspot.com",
//     messagingSenderId: "211637840328",
//     appId: "1:211637840328:web:348e88e80c2b6bdc6c38fd",
//     measurementId: "G-BQCMV13HZT"
//   };

//   firebase.initializeApp(firebaseConfig);

//   function requestPermission() {
//     console.log('Requesting permission...');
//     Notification.requestPermission().then((permission) => {
//       if (permission === 'granted') {
//         console.log('Notification permission granted.');
//       }
//     })
//    }


// const messaging = firebase.messaging();
// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({ vapidKey: 'pH8PjPTaIY826iRy9daLfy3HCh5h2QRRqqSELUsOGuM' }).then((currentToken) => {
    if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log(currentToken);
        messaging.getMessaging().subscribeToTopic(currentToken, topic)
            .then((response) => {
                // See the MessagingTopicManagementResponse reference documentation
                // for the contents of response.
                console.log('Successfully subscribed to topic:', response);
            })
            .catch((error) => {
                console.log('Error subscribing to topic:', error);
            });
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});

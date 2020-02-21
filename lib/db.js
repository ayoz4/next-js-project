var firebase = require("firebase/app");
require("firebase/firestore");

const loadFirebase = () => {
  try {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAdfyzUtQ7-LNDJVZNg_DKEA0bGZDtkmNg",
      authDomain: "ikit-is.firebaseapp.com",
      databaseURL: "https://ikit-is.firebaseio.com",
      projectId: "ikit-is",
      storageBucket: "ikit-is.appspot.com",
      messagingSenderId: "504528378654",
      appId: "1:504528378654:web:bfa228e368a6b7b672c70f",
      measurementId: "G-TVH1KC3R69"
    };

    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error("Firebase initialization error", err.stack);
    }
  }

  return firebase;
};

export default loadFirebase;

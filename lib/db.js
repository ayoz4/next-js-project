import firebase from "firebase/app";
import "firebase/firestore";

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
      appId: "1:504528378654:web:c66f0ab8ba0517c472c70f",
      measurementId: "G-VGP1EB1TBL"
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

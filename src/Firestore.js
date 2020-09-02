import firebase from "firebase";
require("dotenv").config();
const config = {
  //my credentials----
  apiKey: "process.env.apikey",
  authDomain: "process.env.authDomain",
  databaseURL: "https://testing-6690e.firebaseio.com",
  projectId: "testing-6690e",
  storageBucket: "testing-6690e.appspot.com",
  messagingSenderId: "367923280273",
  appId: "1:367923280273:web:33625fe8773cd858958230",
  measurementId: "G-DXMJCTK9TE",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;

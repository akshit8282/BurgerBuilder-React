import firebase from 'firebase/app';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBUS2sWyll7HJKxLyAMRk-SZDJO9S4t9is",
  authDomain: "react-burgerbuilder-ab5c6.firebaseapp.com",
  projectId: "react-burgerbuilder-ab5c6",
  storageBucket: "react-burgerbuilder-ab5c6.appspot.com",
  messagingSenderId: "2598339170",
  appId: "1:2598339170:web:e962870580694c6efc073b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
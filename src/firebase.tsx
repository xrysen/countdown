import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9qcWDK8zbQPL4FI7wjhg2XkU0kWlFZYc",
  authDomain: "countdown-41123.firebaseapp.com",
  projectId: "countdown-41123",
  storageBucket: "countdown-41123.appspot.com",
  messagingSenderId: "665168664360",
  appId: "1:665168664360:web:2f8833b47e72b890b3a21d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
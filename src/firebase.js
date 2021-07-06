import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAkL2NMRoiIYN0_wgjKIwE62velPrYw0C0",
  authDomain: "fb-juaniruiz.firebaseapp.com",
  projectId: "fb-juaniruiz",
  storageBucket: "fb-juaniruiz.appspot.com",
  messagingSenderId: "5734900578",
  appId: "1:5734900578:web:24a012cce545ab7d42823b"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();


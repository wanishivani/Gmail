
// import firebase  from "firebase/app";
// import  { initializeApp }from 'firebase/compat/app';
//  import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import  '@firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDv2Uhsv5gdgoOGTyMzJubeHytM13w1G5Q",
  authDomain: "clone-e9507.firebaseapp.com",
  databaseURL: "https://clone-e9507-default-rtdb.firebaseio.com",
  projectId: "clone-e9507",
  storageBucket: "clone-e9507.appspot.com",
  messagingSenderId: "224958891886",
  appId: "1:224958891886:web:df44f12130f1ff4753a37f",
  measurementId: "G-C5GWPL91NF"
};



const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth= firebase.auth();
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };


export { db,firebase,auth };






import firebase from "@firebase/app";
import "@firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBPy3K3BBXuL3qUgbWds2Ibz3_WQFC0NXI",
  authDomain: "geo-apes.firebaseapp.com",
  databaseURL: "https://geo-apes.firebaseio.com",
  projectId: "geo-apes",
  storageBucket: "geo-apes.appspot.com",
  messagingSenderId: "741954224681",
  appId: "1:741954224681:web:d3a3b33696759e31115238",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore.settings({ timestampsInSnapshots: true });

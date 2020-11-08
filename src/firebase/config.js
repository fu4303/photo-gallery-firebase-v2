import * as firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFfZHwv9OAtp3C2gFCd-c80SLl-my_pyE",
  authDomain: "photo-gallery-824c8.firebaseapp.com",
  databaseURL: "https://photo-gallery-824c8.firebaseio.com",
  projectId: "photo-gallery-824c8",
  storageBucket: "photo-gallery-824c8.appspot.com",
  messagingSenderId: "402225214071",
  appId: "1:402225214071:web:c4f4acfca0e2bd5b14cc72",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const photoStorage = firebase.storage();
const photoFirestore = firebase.firestore();

export { photoStorage, photoFirestore };

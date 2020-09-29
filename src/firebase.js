import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCwcf_6rQdIKsBwvoBe5kW3qMbDzXqhSrY",
    authDomain: "maderas-y-retazos.firebaseapp.com",
    databaseURL: "https://maderas-y-retazos.firebaseio.com",
    projectId: "maderas-y-retazos",
    storageBucket: "maderas-y-retazos.appspot.com",
    messagingSenderId: "37409950818",
    appId: "1:37409950818:web:ddd708f6b7678357b8153b"
  };

  firebase.initializeApp(firebaseConfig);
  
export const db = firebase.firestore();
export const storage = firebase.storage();



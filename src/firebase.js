import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBpnjjatm78kVMSKiAW9U1zvaNjsStoxQg",
    authDomain: "insta-reels-vijay.firebaseapp.com",
    projectId: "insta-reels-vijay",
    storageBucket: "insta-reels-vijay.appspot.com",
    messagingSenderId: "524921837955",
    appId: "1:524921837955:web:d30e68b48ad2914e68feb6",
    measurementId: "G-2SM3Q285Y1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
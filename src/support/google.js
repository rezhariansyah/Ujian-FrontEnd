import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyA2j90hrExmfX3-R7F-rvLaWMLLSlRRIMs",
    authDomain: "login-with-e815b.firebaseapp.com",
    databaseURL: "https://login-with-e815b.firebaseio.com",
    projectId: "login-with-e815b",
    storageBucket: "login-with-e815b.appspot.com",
    messagingSenderId: "173546596144"
};

firebase.initializeApp(config)
export const ref = firebase.database().ref();
export const auth = firebase.auth;
export const provider = new firebase.auth.GoogleAuthProvider()
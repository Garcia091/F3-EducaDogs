import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjEJEW1Ml0UmhpW0HZP5TSs96AsgGkreo",
    authDomain: "app-frontend-6.firebaseapp.com",
    projectId: "app-frontend-6",
    storageBucket: "app-frontend-6.appspot.com",
    messagingSenderId: "66843513700",
    appId: "1:66843513700:web:ac800485c5370d3e30a071"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
    db,
    firebase
}
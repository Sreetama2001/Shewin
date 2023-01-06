// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC5uvEVrMvaEZzcO7QrV8u8oJZQXbgF6gs",
	authDomain: "shewin-40205.firebaseapp.com",
	projectId: "shewin-40205",
	storageBucket: "shewin-40205.appspot.com",
	messagingSenderId: "604340215105",
	appId: "1:604340215105:web:082a7c4ea18084346515c0",
};

// Initialize Firebase
let app;

if (firebase.apps.length == 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = app.storage();

export { db, auth, storage };

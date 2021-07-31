//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import firebase from "firebase/app";
import "firebase/analytics"
import "firebase/auth"
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

// firebase
var firebaseConfig = {
    apiKey: "AIzaSyDMm4V-ZsbuSaw0tlem_JdUAVb4KJ60d0M",
    authDomain: "auth-test-5e4b7.firebaseapp.com",
    projectId: "auth-test-5e4b7",
    storageBucket: "auth-test-5e4b7.appspot.com",
    messagingSenderId: "669842658580",
    appId: "1:669842658580:web:5c3138abda4404cf22de01",
    measurementId: "G-7E7CXHDR2T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth{}
//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

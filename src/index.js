import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase';


 firebase.initializeApp({
    apiKey: "AIzaSyDSmuw7ZAad1q8hpFEDkMvAW3PxDDOnQAo",
    authDomain: "curriculum-sergio-perez.firebaseapp.com",
    databaseURL: "https://curriculum-sergio-perez.firebaseio.com",
    projectId: "curriculum-sergio-perez",
    storageBucket: "",
    messagingSenderId: "739294517115"
});

ReactDOM.render(
  <App />,
  document.getElementById('root'),
 );

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTnTxLj4XS2-9-Bcor-hkdDTBqUnZMKv8",
  authDomain: "auth-development-a2dad.firebaseapp.com",
  projectId: "auth-development-a2dad",
  storageBucket: "auth-development-a2dad.appspot.com",
  messagingSenderId: "61553037714",
  appId: "1:61553037714:web:0ab8152a9566338c2fb14b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth" ;
const firebaseConfig = {
    apiKey: "AIzaSyBKO8n06hKFsTyRz6T_99r70cksvZZpA2A",
    authDomain: "project-pfe-c9f8d.firebaseapp.com",
    projectId: "project-pfe-c9f8d",
    storageBucket: "project-pfe-c9f8d.appspot.com",
    messagingSenderId: "241816289420",
    appId: "1:241816289420:web:84d23da1d394d041a7fba9"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);
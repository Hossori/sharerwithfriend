import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import vuetify from './vuetify';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount('#app');


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5KRD2EqCRo4KvAvidGCdKV_h4YHeT9eM",
    authDomain: "swnt-swf.firebaseapp.com",
    projectId: "swnt-swf",
    storageBucket: "swnt-swf.firebasestorage.app",
    messagingSenderId: "969913085957",
    appId: "1:969913085957:web:2f60467f72338dea88ac6c",
    measurementId: "G-MR1BRN48F0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const firestore = getFirestore(firebaseApp);
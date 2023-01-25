// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWfXHL1FBdPhrT62-8da7TZbKYfmR1ElM",
    authDomain: "repliq-task-ecommerce.firebaseapp.com",
    projectId: "repliq-task-ecommerce",
    storageBucket: "repliq-task-ecommerce.appspot.com",
    messagingSenderId: "990477645453",
    appId: "1:990477645453:web:769b377b0fb059dd7cd4c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
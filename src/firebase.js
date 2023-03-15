// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxcD00y_7VxjLUhYp_V_K5o7vEedbW0Q0",
    authDomain: "helplineportal-2203e.firebaseapp.com",
    projectId: "helplineportal-2203e",
    storageBucket: "helplineportal-2203e.appspot.com",
    messagingSenderId: "416686932079",
    appId: "1:416686932079:web:e3fd0cfc5c0395d6adcd9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
// const db = app.firestore()

export { auth, provider };
export default app;

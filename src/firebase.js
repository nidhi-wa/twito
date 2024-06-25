// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-ab873.firebaseapp.com",
  projectId: "twitter-ab873",
  storageBucket: "twitter-ab873.appspot.com",
  messagingSenderId: "178126292352",
  appId: "1:178126292352:web:e589f59896a7ea0ee4ed65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read;
//         allow write: if
//         request.resource.size < 2 * 1024 * 1024 &&
//         request.resource.contentType.matches('image/.*')
//       }
//     }
//   }
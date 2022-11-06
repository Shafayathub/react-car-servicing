// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-JcwaTgSOjZW7vuYdLjrOVU1765WoxUc',
  authDomain: 'genius-car-6c9b1.firebaseapp.com',
  projectId: 'genius-car-6c9b1',
  storageBucket: 'genius-car-6c9b1.appspot.com',
  messagingSenderId: '55411604279',
  appId: '1:55411604279:web:4067276c825872a615b8b2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

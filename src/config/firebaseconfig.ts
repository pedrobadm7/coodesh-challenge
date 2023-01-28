import firebase from 'firebase';
import 'firebase/storage';
import {FIREBASE_API_KEY} from '@env';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'coodesh-challenge-2deea.firebaseapp.com',
  projectId: 'coodesh-challenge-2deea',
  storageBucket: 'coodesh-challenge-2deea.appspot.com',
  messagingSenderId: '532669692371',
  appId: '1:532669692371:web:6168afbe7ad6d4864ed726',
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore();

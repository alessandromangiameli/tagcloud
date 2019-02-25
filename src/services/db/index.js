import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

const config = {
  apiKey: 'AIzaSyDjL2uC1FagegdY4kWd945BA0qYNJuV_us',
  authDomain: 'tag-cloud-ada2c.firebaseapp.com',
  databaseURL: 'https://tag-cloud-ada2c.firebaseio.com',
  projectId: 'tag-cloud-ada2c',
  storageBucket: 'tag-cloud-ada2c.appspot.com',
  messagingSenderId: '268030425491',
};
firebase.initializeApp(config);

export default firebase.firestore();

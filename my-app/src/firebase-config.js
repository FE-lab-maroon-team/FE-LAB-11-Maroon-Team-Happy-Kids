import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBnVj3CYFPjuG0kA5z2ocf2PzzSUWjGZyE",
  authDomain: "happy-kids-ffec6.firebaseapp.com",
  databaseURL: "https://happy-kids-ffec6.firebaseio.com",
  projectId: "happy-kids-ffec6",
  storageBucket: "",
  messagingSenderId: "2013780992",
  appId: "1:2013780992:web:3ac761672a2b6738fb8ce5"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;
import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDUXb_RyLFtiQlKcImL_LdQSt2u_wgNdsY",
  authDomain: "rider-59d3c.firebaseapp.com",
  projectId: "rider-59d3c",
  storageBucket: "rider-59d3c.appspot.com",
  messagingSenderId: "271622494262",
  appId: "1:271622494262:web:958324f71401dcfd11e097"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

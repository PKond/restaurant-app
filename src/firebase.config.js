import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
apiKey: "AIzaSyCI4imRDhlWD9gvjYp82EvoJ9CkJlvNjnI",
  authDomain: "restaurantapp-480fc.firebaseapp.com",
  databaseURL: "https://restaurantapp-480fc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "restaurantapp-480fc",
  storageBucket: "restaurantapp-480fc.appspot.com",
  messagingSenderId: "42506949291",
  appId: "1:42506949291:web:6f30164fee9cd843c85dee"
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_ID,
//   appId: process.env.REACT_APP_FIREBASE_APPI_ID,
// };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);


export {app, getFirestore, db, storage};
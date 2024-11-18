import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB-hXerFz9KdFlBF-YfJh34hkYwCbP9Ecg",
  authDomain: "testing-app-9b379.firebaseapp.com",
  databaseURL:
    "https://testing-app-9b379-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "testing-app-9b379",
  storageBucket: "testing-app-9b379.firebasestorage.app",
  messagingSenderId: "918703464782",
  appId: "1:918703464782:web:fe896915f910bd8e797e1f",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;

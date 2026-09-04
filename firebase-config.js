// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyACEwTYYiqLX6TDVS8CB-c6Lkci_RG4LFc",
  authDomain: "speed-game-reem.firebaseapp.com",
  databaseURL: "https://speed-game-reem-default-rtdb.firebaseio.com",
  projectId: "speed-game-reem",
  storageBucket: "speed-game-reem.firebasestorage.app",
  messagingSenderId: "845363975079",
  appId: "1:845363975079:web:65e3cd97814400d432dc82",
  measurementId: "G-914L34EZ50"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

// تسجيل دخول مجهول لتأمين الاتصال
auth.signInAnonymously().catch((error) => {
  console.error("Firebase Auth Error:", error);
});

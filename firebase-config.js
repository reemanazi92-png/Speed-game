// ... الكود بعد التعديل، مع قيم حقيقية ...
const firebaseConfig = {
  apiKey: "AIzaSyCxampleLongKey...12345", // هذه قيمتك الحقيقية
  authDomain: "my-speed-game-123.firebaseapp.com", // اسم مشروعك
  databaseURL: "https://my-speed-game-123-default-rtdb.firebaseio.com", // رابط قاعدة بياناتك
  projectId: "my-speed-game-123", // معرف المشروع
  storageBucket: "my-speed-game-123.appspot.com",
  messagingSenderId: "987654321012",
  appId: "1:987654321012:web:a1b2c3d4e5f67890" // معرف التطبيق
};
// ... باقي الكود يبقى كما هو ...
// initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

// تسجيل دخول مجهول لتأمين الاتصال
auth.signInAnonymously().catch((error) => {
  console.error("Firebase Auth Error:", error);
});

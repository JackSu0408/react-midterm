// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// 拿到資料庫與登入功能
const db = getFirestore(app);

const auth = getAuth(app);

// 匯出給其他地方用
export { db, auth };

// 取得指定商品的評論
export async function fetchProductReviews(productId) {
  const docRef = doc(db, "products", String(productId));
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().reviews || [];
  }
  return [];
}

// 新增評論到指定商品
export async function addProductReview(productId, review) {
  const docRef = doc(db, "products", String(productId));
  await updateDoc(docRef, {
    reviews: arrayUnion(review),
  });
}
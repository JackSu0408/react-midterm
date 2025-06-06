import { 
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
query,
where,
updateDoc,
} from "firebase/firestore";
import { auth,db } from "../firebaseConfig";
import products from "../../json/products.json";

// REFERENCE COLLECTION
const productsCollection = collection(db, "products");

//APIs
export const feedProducts = async () => {
   // DELETE ALL EXISTING DOCS
   const querySnapshot = await getDocs(productsCollection);
   querySnapshot.forEach(async (product) => {
     await deleteDoc(doc(db, "products", product.id));
   });
   // ADD NEW DOCS
   products.forEach(async (product) => {
     const docRef = await doc(productsCollection);
     await setDoc(docRef, { ...product, id: docRef.id, category: product.category.toUpperCase() });
   });
 };
  export const getProductById = async (id) => {
  const docRef = await doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const getProductsByCategory = async (category) => {
  // Create a query against the collection.
  const q = await query(productsCollection, where("category", "==", category.toUpperCase()));
  const querySnapshot = await getDocs(q);
  // Convert query to a json array.
  let result = [];
  querySnapshot.forEach(async (product) => {
     await result.push(product.data());
  });
  return result;
};

export const getProducts = async () => {
  const querySnapshot = await getDocs(productsCollection);
  // Convert query to a json array.
  let result = [];
  querySnapshot.forEach(async (product) => {
     await result.push(product.data());
  });
  return result;
};
export const getUserInfo = async () => {
  const user = auth?.currentUser || null;
  if (user?.uid) {
    const docRef = doc(db, "users", user?.uid);
    const docSnap = await getDoc(docRef);
    const userDoc = docSnap.data();
    return {
      uid: user.uid,
      email: user.email,
      ...userDoc,
    };
  } else {
    return {};
  }
};

export const updateUserInfo = async ({ username, adrs, tel, uid }) => {
  const docRef = doc(db, "users", uid);
  await updateDoc(docRef, {
    username,
    adrs,
    tel,
  });
  const user = auth.currentUser;
  localStorage.setItem("user", JSON.stringify(user));
};
 
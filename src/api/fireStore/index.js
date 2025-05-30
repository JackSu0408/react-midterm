import { collection,doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,} from "firebase/firestore";
import { db } from "../firebaseConfig";
// import products from "../../json/products.json";

const productsCollection = collection(db, "products");

//APIs
export const feedProducts = async () => {
   // DELETE ALL EXISTING DOCS
   const querySnapshot = await getDocs(productsCollection);
   querySnapshot.forEach(async (product) => {
     await deleteDoc(doc(db, "products", productDoc.id));
   });
   // ADD NEW DOCS
   products.forEach(async (product) => {
     const docRef = await doc(productsCollection);
     await setDoc(docRef, { ...product, id: docRef.id, category: product.category.toUpperCase() });
   });
 };
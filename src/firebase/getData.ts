import { doc, DocumentData, getDoc, getFirestore } from "firebase/firestore";
import firebase_app from "./config";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getData() {
  const querySnapshot = await getDocs(collection(db, "marker"));
  const result: any = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    result.push(doc.data());
  });

  return result;
}

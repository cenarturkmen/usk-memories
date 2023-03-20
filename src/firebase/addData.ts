import firebase_app from "./config";
import { getFirestore, doc, addDoc, collection } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addData(colllection: string, data: any) {
  let result = null;
  let error = null;

  try {
    // Add a new document with a generated id.
    result = await addDoc(collection(db, colllection), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

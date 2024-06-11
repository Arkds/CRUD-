import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './firebase';

const collectionName = 'persons';
const itemsCollection = collection(db, collectionName);

export const savePerson = (obj) => {
  return addDoc(itemsCollection, obj).id;
};

export const getAllPersons = async () => {
  const result = await getDocs(query(itemsCollection));
  return result.docs.map(doc => {
    return { ...doc.data(), id: doc.id };
  });
};

export const deletePerson = async (id) => {
    await deleteDoc(doc(itemsCollection, id));
}

export const updatePerson = async (id, obj) => {
    await updateDoc(doc(db, collectionName, id), {name: obj})
}

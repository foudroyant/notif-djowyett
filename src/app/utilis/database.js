import { collection, getDocs, deleteDoc, doc, addDoc } from "firebase/firestore";
import { db, } from "../firebase";


const getData = async (collection_name) => {
    const data = [];
    const querySnapshot = await getDocs(collection(db, collection_name));
  
    return querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        name: doc.data()["name"],
        time: doc.data()["time"]
      };
    });
  };

  const deleteData = async (collection_name, id) =>{
    // Supprime le document correspondant à l'ID de Firebase
    await deleteDoc(doc(db, collection_name, id));
  }

  const addData = async (collection_name, data)=>{
    console.log(data)
    const col = collection(db, collection_name); // Remplacez par le nom de votre collection
    await addDoc(col, data);
  }
  

export default {
    getData,
    deleteData,
    addData,
}
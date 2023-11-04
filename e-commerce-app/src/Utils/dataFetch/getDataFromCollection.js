import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/firebase";

const getDataFromCollection = (collectionName, setFunction) => {
  getDocs(collection(db, collectionName)).then((querySnapshot) => {
    const dataArry = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      dataArry.push({ ...doc.data(), categoryId: doc.id });
      //   console.log(doc.id, "=>", doc.data());
    });
    // console.log(dataArry);
    setFunction(dataArry);
  });
};

export default getDataFromCollection;

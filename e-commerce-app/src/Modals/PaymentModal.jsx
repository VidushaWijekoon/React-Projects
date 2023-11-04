import { forwardRef, useImperativeHandle, useState } from "react";
import Modal from "@mui/material/Modal";
import db from "../Firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

const PaymentModal = (props, ref) => {
  const [open, setOpen] = useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({
    handleOpen: () => setOpen(true),
  }));

  const addData = () => {
    setDoc(doc(db, "category", "category4"), {
      title: "category title 04",
      img: "https://faraitltd.com/wp-content/uploads/2023/02/Screenshot_7.jpg",
    })
      .then(() => {
        console.log("Document written with ID: ");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex flex-col items-center justify-center"
    >
      <div className="w-[90%] bg-white">
        Vidusha Wijekoon
        <button onClick={addData}>Click</button>
      </div>
    </Modal>
  );
};

export default forwardRef(PaymentModal);

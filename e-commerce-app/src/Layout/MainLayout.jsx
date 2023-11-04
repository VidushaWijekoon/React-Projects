import { useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PaymentModal from "../Modals/PaymentModal";

const MainLayout = () => {
  const paymentModalRef = useRef();

  return (
    <div className="w-full h-screen overflow-hidden">
      <PaymentModal ref={paymentModalRef} />
      <Header paymentModalRef={paymentModalRef} />
      <Outlet paymentModalRef={paymentModalRef} />
      <Footer />
    </div>
  );
};

export default MainLayout;

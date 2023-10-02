import React from "react";
import Ads from "./Ads";
import Product from "./Product";

const Home = () => {
  return (
    <div className="pt-[100px] p-5 w-full h-screen overflow-y-scroll">
      <Ads />
      <Product title="Tranding Products" rowsCount={1} slidesPerView={3} />
    </div>
  );
};

export default Home;

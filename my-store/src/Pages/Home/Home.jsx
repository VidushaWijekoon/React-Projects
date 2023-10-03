import React from "react";
import Ads from "./Ads";
import Product from "./Product";

const Home = () => {
  return (
    <div className="pt-[100px] p-5 w-full h-screen overflow-y-scroll">
      <Ads />
      <Product title="Tranding Products" />
      <Product title="Electric Items" />
      <Product title="Laptop Items" />
    </div>
  );
};

export default Home;

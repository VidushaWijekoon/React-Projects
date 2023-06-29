import React, { useState } from "react";
import Ads from "./Ads";
import Product from "./Product";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="pt-[100px] p-5 w-full h-screen overflow-y-scroll">
      <Ads />
      <Product title="Trending Production" />
      <Product title="Electronic Items" />
      <Product title="Laptop Items" />
    </div>
  );
};

export default Home;

import { useState } from "react";
import Ads from "./Ads";
import Product from "./Product";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading />;

  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <Ads />
      <Product title="Trending Products" />
      <Product title="Electronic Items" />
      <Product title="Laptop Items" />
    </div>
  );
};

export default Home;

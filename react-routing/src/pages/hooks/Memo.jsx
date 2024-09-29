import { useMemo, useState } from "react";
import useFetch from "../../hooks/use-fetch";

const Memo = () => {
    const { data, loading } = useFetch("https://dummyjson.com/products");
    const [flag, setFlag] = useState(false);

    const filterProductByPrice = (getProducts) => {
        console.log("this function is rendered");
        return getProducts?.length > 0
            ? getProducts.filter(
                  (singleProductItem) => singleProductItem.price > 10
              )
            : [];
    };

    const memorizedVersion = useMemo(
        () => filterProductByPrice(data?.products),
        [data?.products]
    );

    console.log(data);

    if (loading) return <h1>Data is Loading! Please Wait</h1>;

    return (
        <div>
            <h1 style={{ color: flag ? "red" : "black" }}>React Memo</h1>
            <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
            <ul>
                {memorizedVersion.map((item) => (
                    <li>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Memo;

import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";
import "./style.css";

const initailState = true;

const ProductList = ({ name, city, listOfProducts }) => {
    // console.log(props);
    // const { name, city } = props;

    // const flag = true;
    const [flag, setFlag] = useState(initailState);
    const [count, setCount] = useState(0);
    const [changeStyle, setChangeStyle] = useState(false);

    // Condition Check
    // const renderTextBlock = (getFlag) => {
    //     return getFlag ? (
    //         <h4>
    //             name is {name} and from {city}
    //         </h4>
    //     ) : (
    //         <h4>Hello World</h4>
    //     );
    // };

    // // Condition Check
    // const anotherWayToUseCondition = flag ? (
    //     <h4>Another Way to Check Condition</h4>
    // ) : (
    //     <h4>Hello World</h4>
    // );

    // // Condition Check
    // const renderText = null;
    // if (renderText) {
    //     renderText = <h4>Useing Regular if else Condition</h4>;
    // } else {
    //     renderText = <h4>Hello World</h4>;
    // }

    const handleToggleText = () => {
        setFlag(!flag);
    };

    const handleIncreaseCount = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        setFlag(!flag);
        return () => {
            console.log("component is unmounted -> have some side effects");
        };
    }, []); // Dependancy Array Runs When the Page Load

    useEffect(() => {
        // console.log("count changes");
        if (count === 10) setChangeStyle(true);
    }, [count]);

    console.log(changeStyle);

    return (
        <div>
            <h3 className="title">E-Commerce Project</h3>
            <button onClick={handleToggleText}>Toggle Text</button>
            {/* <ProductItem /> */}
            {/* {renderTextBlock(flag)} */}
            {flag ? (
                <h4>
                    {name} and {city}
                </h4>
            ) : (
                <h4>Hello</h4>
            )}
            {/* {anotherWayToUseCondition} */}
            <div>
                <button
                    onClick={handleIncreaseCount}
                    style={{
                        backgroundColor: changeStyle ? "black" : "white",
                        color: changeStyle ? "white" : "black",
                    }}
                >
                    Increse Count
                </button>
                <p>Count {count}</p>
            </div>
            <ul>
                {listOfProducts.map((item, index) => (
                    // <li key={index}>{index}</li>
                    <ProductItem singleProductItem={item} keyValue={index} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

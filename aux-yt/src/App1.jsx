import React, { useState } from "react";
import Main from "./components/Main";
import { myData } from "./data/myObj";

const App = () => {
    const [myVar, setMyvar] = useState({
        name: "Vidusha Wijekoon",
        city: "Kandy",
        position: "Web Developer",
    });
    const [myDataState, setMyDataState] = useState(myData);
    const [inputVal, setInputVal] = useState("");

    const handleClick = () => {
        setMyvar({
            ...myVar,
            name: "Harshani",
        });

        setMyDataState([
            ...myDataState,
            {
                id: "5",
                name: "Vidusha Wijekoon",
                city: "Dubai",
                position: "Junior Web Developer",
                image: "https://vermontteddybear.com/cdn/shop/files/vtb-24765-20inchhugsybear_M_220718_0329.jpg?v=1714404213",
            },
        ]);
    };

    const mainBlock = myDataState?.map(
        ({ name, city, position, image, id }, index) => {
            return (
                <Main
                    key={id + index}
                    name={name}
                    city={city}
                    position={position}
                    image={image}
                />
            );
        }
    );

    const inputChangeHandle = (ele, data) => {
        ele.preventDefault();
        console.log(data);
        setInputVal(ele.target.value);
    };

    return (
        <div className="main__container">
            <div>
                VW React Fundamentals
                <h1>{myVar.name}</h1>
            </div>
            <p>{inputVal}</p>
            <div className="mainBlock__container">{mainBlock}</div>
            <br />
            <br />
            <button
                style={{
                    fontSize: "14px",
                    border: "2px solid red",
                    padding: "8px 12px",
                }}
                onClick={handleClick}
            >
                Click Me
            </button>

            <input
                type="text"
                placeholder="Please Enter Input"
                style={{
                    border: "2px solid red",
                    marginTop: "15px",
                    fontSize: "15px",
                    padding: "5px",
                }}
                onChange={(e) => {
                    inputChangeHandle(e, inputVal);
                }}
            />
        </div>
    );
};

export default App;

import { useState } from "react";
import { myData } from "./data/myObj";
import Main from "./components/Main";

const App = () => {
    const [inputVal, setInputVal] = useState(0);

    const handleClick = () => {
        setTimeout(() => {
            console.log("clicked");
            setInputVal((pre) => {
                if (pre < 1) {
                    return pre + 1;
                } else if (pre < 2) {
                    return pre + 2;
                } else {
                    return pre + 2;
                }
            });
        }, 3000);
    };

    const mainBlock = myData?.map(
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
        setInputVal(ele.target.value);
    };

    return (
        <div className="main__container">
            <div>
                <h5>VW Reactr Fundamentals</h5>
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
        </div>
    );
};

export default App;

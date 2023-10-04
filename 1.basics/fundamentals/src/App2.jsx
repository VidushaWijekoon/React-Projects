import React, { useState } from "react";
import Main from "./Components/Main";
import myData from "./Data/myData";
// import { myData2 } from "./Data/myData";

import "./App.css";

const App = () => {
  const [inputVal, setInputVal] = useState(0);

  const clickHandle = () => {
    setTimeout(() => {
      console.log("timeout clicked");
      setInputVal((previousValue) => {
        if (previousValue < 1) {
          return previousValue + 1;
        } else if (previousValue < 2) {
          return previousValue + 3;
        } else {
          return previousValue + 2;
        }
      });
    }, 3000);
  };

  console.log(inputVal);

  const MainBlock = myData?.map(
    ({ name, city, position, imgUrl, id }, index) => {
      return (
        <Main
          key={id + index}
          imgUrl={imgUrl}
          name={name}
          city={city}
          position={position}
        />
      );
    }
  );

  const inputChangeHandle = (event, data) => {
    event.preventDefault();
    console.log(data);
    setInputVal(event.target.value);
  };

  return (
    <div className="main__container">
      <span> Learn React Basics</span>
      <h1>{inputVal}</h1>
      <div className="mainBlock__container">{MainBlock}</div>
      <br />
      <br />
      <button
        style={{
          fontSize: "12px",
          border: "1px solid red",
          padding: "7px 12px",
        }}
        onClick={clickHandle}
      >
        Click Me
      </button>

      <br />
      <br />
    </div>
  );
};

export default App;

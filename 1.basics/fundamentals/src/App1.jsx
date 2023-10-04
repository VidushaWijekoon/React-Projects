import React, { useState } from "react";
import Main from "./Components/Main";
import myData from "./Data/myData";
// import { myData2 } from "./Data/myData";

import "./App.css";

const App = () => {
  // const [myVar, setMyVar] = useState("Amila Dharshana");
  const [myVar, setMyVar] = useState({
    name: "Kumara",
    city: "Colombo",
    position: "App Developer",
  });

  const [myDataState, setMyDataState] = useState(myData);
  const [inputVal, setInputVal] = useState("");

  const clickHandle = () => {
    setMyVar({ ...myVar, name: "Glann Maxwell" });
    console.log(myVar);

    setMyDataState([
      ...myDataState,
      {
        id: 6,
        name: "Harshani Dissanayake",
        city: "Ajman",
        position: "English Teacher",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi7h6S7xrNzc6ihoCi5p-mdDfoRJncOAkeNA&usqp=CAU",
      },
    ]);
  };

  console.log(inputVal);

  const MainBlock = myDataState?.map(
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
      <h1>{myVar.name}</h1>
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

      <input
        style={{ border: "1px solid green", fontSize: "14px", padding: "7px" }}
        type="text"
        placeholder="type something in here"
        onChange={(e) => {
          inputChangeHandle(e, inputVal);
        }}
      />
    </div>
  );
};

export default App;

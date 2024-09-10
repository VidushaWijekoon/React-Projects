import { useState } from "react";
import "./app.css";
import Main from "./Components/Main";
import myData from "./Data/myData";

const pageTitle = "Vidusha React Basic Project";
const appName = "Vidusha Wijekoon React First App";

const App = () => {
  const [inputVal, setInputVal] = useState(0);

  const clickHandle = () => {
    setTimeout(() => {
      // Get Previous Value to do Increment
      setInputVal((pre) => {
        if (pre < 1) {
          return pre + 1;
        } else if (pre < 2) {
          return pre + 3;
        } else {
          return pre + 2;
        }
      });
      console.log("clicked");
    }, 1500);
  };

  const inputChangeHandler = (event, data) => {
    event.preventDefault();
    setInputVal(event.target.value);
  };

  const MainBlock = myData.map(({ name, city, position, img, id }, index) => {
    return (
      <Main key={index} name={name} city={city} position={position} img={img} />
    );
  });

  return (
    <>
      <div className="container">
        <div className="w-100 d-flex justify-content-center text-center mb-3">
          <div className="">
            {pageTitle}
            <h1>{pageTitle}</h1>
            <h3>{appName}</h3>
            <p>{inputVal}</p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">{MainBlock}</div>
        <button
          style={{
            fontSize: "16px",
            border: "1px solid red",
            backgroundColor: "red",
            color: "white",
          }}
          className="btn btn-sm mt-5 d-flex mx-auto"
          onClick={clickHandle}
        >
          Submnt
        </button>
      </div>
    </>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import Unit from "./Components/Unit";

const App = () => {
  const [inputData, setInputData] = useState({
    imageUrl: "",
    name: "",
    city: "",
    position: "",
  });
  const [myData, setMyData] = useState([]);
  const [windowWith, setWindowWidth] = useState(window.innerWidth);

  // Database connection, Request methods, API
  //   useEffect(() => {
  //     console.log("use effect...");
  //   }, [inputData.name]);

  useEffect(() => {
    const changeWindowWith = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWindowWith);
    console.log("use effect");
    return () => {
      console.log("use effect clean up");
      window.removeEventListener("resize", changeWindowWith);
    };
  }, [inputData.name]);

  return (
    <>
      <div className="main__container">
        <h1>{windowWith}</h1>
        <div className="main__left">
          <input
            type="text"
            value={inputData.imageUrl}
            placeholder="Image Url"
            onChange={(e) => {
              e.preventDefault();
              setInputData((preInputData) => ({
                ...preInputData,
                imageUrl: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            value={inputData.name}
            placeholder="Full Name"
            onChange={(e) => {
              e.preventDefault();
              setInputData((preInputData) => ({
                ...preInputData,
                name: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            value={inputData.city}
            placeholder="City"
            onChange={(e) => {
              e.preventDefault();
              setInputData((preInputData) => ({
                ...preInputData,
                city: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            value={inputData.position}
            placeholder="Position"
            onChange={(e) => {
              e.preventDefault();
              setInputData((preInputData) => ({
                ...preInputData,
                position: e.target.value,
              }));
            }}
          />
          <button
            type="submit"
            onClick={() => {
              setMyData((pre) => [
                ...pre,
                {
                  image: inputData.imageUrl,
                  name: inputData.name,
                  city: inputData.city,
                  position: inputData.position,
                },
              ]);

              console.log({
                image: inputData.imageUrl,
                name: inputData.name,
                city: inputData.city,
                position: inputData.position,
              });

              setInputData((previousValue) => {
                if (previousValue.imageUrl.length > 0) {
                  return {
                    ...previousValue,
                    imageUrl: "",
                  };
                }
              });

              setInputData((previousValue) =>
                previousValue.name.length > 0
                  ? {
                      ...previousValue,
                      name: "",
                    }
                  : previousValue
              );

              setInputData((previousValue) =>
                previousValue.city.length > 0
                  ? {
                      ...previousValue,
                      city: "",
                    }
                  : previousValue
              );
              setInputData((previousValue) =>
                previousValue.position.length > 0
                  ? {
                      ...previousValue,
                      position: "",
                    }
                  : previousValue
              );
            }}
          >
            Submit
          </button>
        </div>
        <div className="main_right">
          {myData?.map(({ image, name, city, position }, index) => (
            <Unit
              key={index}
              image={image}
              name={name}
              city={city}
              position={position}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;

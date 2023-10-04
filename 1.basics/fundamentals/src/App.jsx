import React, { useState } from "react";
import "./App.css";
import Unit from "./Components/Unit";
import Header from "./Components/Header";

const App = () => {
  //   const [imageUrl, setImageUrl] = useState("");
  //   const [name, setName] = useState("");
  //   const [city, setCity] = useState("");
  //   const [position, setPosition] = useState("");

  const [inputData, setInputData] = useState({
    imageUrl: "",
    name: "",
    city: "",
    position: "",
  });
  const [myData, setMyData] = useState([]);

  //   console.log(myData);

  return (
    <>
      <Header />
      <div className="main__container">
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

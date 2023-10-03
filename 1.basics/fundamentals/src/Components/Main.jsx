import React from "react";

// const name = "Vidusha Wijekoon";
// const position = "Web Developer";

// const myObj = {
//   name: `${name}`,
//   position: `${position}`,
//   city: "Al Sharjah",
// };

const Main = ({ children, name, city, position, imgUrl }) => {
  // Object Destructor
  // const { city } = myObj;
  return (
    <div>
      <img
        src={
          imgUrl
            ? `${imgUrl}`
            : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMpDwUGXCA3ZSHLdGaS9bsJAhuvQWgYhIsw&usqp=CAU`
        }
        alt="cardImage"
      />
      <div className="mainBlock__details">
        <h3>{!name ? "no name" : `${name}`}</h3>
        <p>
          <span>{!city ? "no city" : `${city}`}</span>
          <span>{!position ? "no position" : `${position}`}</span>
        </p>
      </div>
      {children}
    </div>
  );
};

export default Main;

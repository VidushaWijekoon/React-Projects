import React from "react";

const Unit = ({ image, name, city, position }) => {
  return (
    <>
      <img src={image} alt={name} className="w-100 img-fluid img-responsive" />
      <h3>{name}</h3>
      <div className="d-flex justify-content-between">
        <span>{city}</span>
        <span>-</span>
        <span>{position}</span>
      </div>
    </>
  );
};

export default Unit;

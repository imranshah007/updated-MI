import React from "react";
import "../App.css";
import img from "../image.jpg";

const Body = ({ headerText, Length }) => {
  return (
    <div className="container">
      <img
        src={img}
        className={`image ${
          Length ? "image-width" : "image-res"
        }`}
        alt=""
      />
      <h1 className="text">{headerText}</h1>
    </div>
  );
};
export default Body;

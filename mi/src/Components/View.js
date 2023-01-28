import React from "react";
import NameCard from "./Cards";
import "../App.css";
const View = ({ RandomName }) => {
  const Name = RandomName.map((RandomName) => {
    console.log(RandomName)
    return(
    
    <NameCard key={RandomName} RandomName={RandomName} />);
  });
  return <div className="view-p">{Name}</div>;
};
export default View;

import React from "react";

const Gird = () => {
  const width = Math.ceil(window.innerWidth / 20);
  const height = Math.ceil(window.innerHeight / 20);
  const gridCells = [];
  for (let i = 0; i < width * height; i++) {
    gridCells.push(<div key={i} className="grid-cell"></div>);
  }
  console.log(gridCells);
  return <div className="grid">{gridCells}</div>;
};

export default Gird;

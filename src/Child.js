import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child(props) {
  console.log(props);
  return (
    <div
      onClick={() => props.onChangeColor(getRandomColor())}
      className="child"
      style={{ backgroundColor: props.color }}
    />
  );
}

export default Child;

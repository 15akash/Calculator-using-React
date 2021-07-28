import React from "react";
import ReactDOM from "react-dom";
import { add, multiply, subtract, divide } from "./calculator";

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(4, 5)}</li>
    <li>{divide(20, 2)}</li>
  </ul>,
  document.getElementById("root")
);

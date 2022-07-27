import React from "react";
import ReactDOM from "react-dom";
import { Consumer } from "library/components";

import "./index.css";

export const App = () => (
  <div className="container">
    <div>Name: uns</div>
    <Consumer />
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

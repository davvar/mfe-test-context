import React from "react";
import ReactDOM from "react-dom";
import { Consumer, Context } from "library/components";
import {App as Uns} from "uns/src";
console.log({ Context });
console.log({ Consumer });

import "./index.css";

const App = () => (
  <Context value={() => alert("context worked")}>
    <div className="container">
      <Consumer />
      <div>Name: shell</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <Uns />
    </div>
  </Context>
);
ReactDOM.render(<App />, document.getElementById("app"));

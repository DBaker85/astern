import "regenerator-runtime/runtime.js";
import React from "react";
import { render } from "react-dom";

import { App } from "./App";

if (process.env.NODE_ENV === "development") {
  require("./sdk/sdk");
}

render(<App />, document.getElementById("root"));

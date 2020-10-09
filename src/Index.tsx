import "regenerator-runtime/runtime.js";
import { h, render } from "preact";

import { App } from "./App";

if (process.env.NODE_ENV === "development") {
  require("./sdk/sdk");
}

render(
  <App />,

  document.getElementById("root")
);

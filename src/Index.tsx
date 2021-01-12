import "regenerator-runtime/runtime.js";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import { App } from "./App";

if (process.env.NODE_ENV === "development") {
  require("./sdk/sdk");
}
if (process.env.NODE_ENV === "disconnected") {
  require("./sdk/mock");
}

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

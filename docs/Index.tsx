/// <reference path='../src/images.d.ts'/>

import "requestidlecallback-polyfill";
import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";
import { App } from "./App";
import { initialize } from "./utils/analytics/analytics";

render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById("doc-root")
);

initialize();

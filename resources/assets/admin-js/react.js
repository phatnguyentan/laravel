import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  // <Provider store={store}>
  <BrowserRouter>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </BrowserRouter>,
  // </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

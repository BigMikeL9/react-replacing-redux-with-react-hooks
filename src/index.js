import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

// ---- using built-in Context API 👇
import ProductsContextProvider from "./context/ProductsContext";

// ---- using Redux 👇
// import { Provider } from "react-redux";
// import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  <ProductsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsContextProvider>
  // </Provider>
);

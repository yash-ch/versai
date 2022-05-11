import React from "react";
import ReactDOM from "react-dom";
import WebsiteRoute from "./Route";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <WebsiteRoute />
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Pages from "./Pages";

function App() {
  return (
    <div className="container">
      <h1>Multistep Form</h1>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;

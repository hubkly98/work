import React from "react";
//import "./style.css";
import GlobalStyle from './globalStyles'
import { Navbar } from "./components";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;

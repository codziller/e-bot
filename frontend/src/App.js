import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;

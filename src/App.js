import React from "react";
import "./App.css";
import NavbarPage from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import FilterPage from "./components/FilterPage";

function App() {
  return (
    <Router>
      <NavbarPage />
      <HomePage />
      <FilterPage />
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import NavbarPage from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <NavbarPage />

      <HomePage />
    </Router>
  );
}

export default App;

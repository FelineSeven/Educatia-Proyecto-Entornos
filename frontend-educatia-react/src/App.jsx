// src/App.jsx
// App.jsx
import "./style.css";
import "./temas.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cursos from "./pages/Cursos";
import Temas from "./pages/Temas";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/temas" element={<Temas />} />
      </Routes>
    </Router>
  );
};

export default App;



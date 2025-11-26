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
import Examenes from "./pages/Examenes";
import ExamenForm from "./components/ExamenForm";
import Preguntas from "./pages/Preguntas";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/temas" element={<Temas />} />
        <Route path="/examenes" element={<Examenes />} />
        <Route path="/examenes/crear" element={<ExamenForm />} />
        <Route path="/examenes/editar/:id" element={<ExamenForm />} />
        <Route path="/preguntas" element={<Preguntas />} />
      </Routes>
    </Router>
  );
};

export default App;



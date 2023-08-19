import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link as RouterLink,
} from "react-router-dom";
import { styled } from "@mui/system";
import { Button, Typography, Container, Grid, Paper, Box } from "@mui/material";

import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Header from "./components/Header/Header";

function Contact() {
  return <div>Contact</div>;
}

function App() {
  return (
    <Router>
      <Header />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

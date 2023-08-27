import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link as RouterLink,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Button, Typography, Container, Grid, Paper, Box } from "@mui/material";

import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Header from "./components/Header/Header";
import "./App.css";

function Contact() {
  return <div>Contact</div>;
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={Contact} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}

export default App;

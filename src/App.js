import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link as RouterLink,
} from "react-router-dom";
import { Button, Typography, Container, Grid, Paper, Box } from "@mui/material";

import About from "./components/About";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function Home() {
  return <div>Home</div>;
}

function Projects() {
  return <div>Projects</div>;
}

function Contact() {
  return <div>Contact</div>;
}

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={RouterLink} to="/projects">
          Projects
        </Button>
        <Button color="inherit" component={RouterLink} to="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={Projects} />
          <Route path="/contact" element={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

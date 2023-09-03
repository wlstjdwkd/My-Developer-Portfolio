import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link as RouterLink,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home";

import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: '"Dongle", sans-serif',
    fontSize: 20,
  },
});

function Contact() {
  return <div>Contact</div>;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app-root">
          <AppContent className="content-wrap" />
        </div>
      </Router>
    </ThemeProvider>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="app-content">
      <Header />
      <div style={{ padding: "20px", flexGrow: 1 }}>
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
      <Footer className="footer-fixed" />
    </div>
  );
}

export default App;

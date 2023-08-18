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

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Header from "./components/Header/Header";

function Home() {
  return <div>Home</div>;
}

function Projects() {
  return <div>Projects</div>;
}

function Contact() {
  return <div>Contact</div>;
}

const StyledContainer = styled(Container)({
  textAlign: "center",
  paddingTop: "40px",
  paddingBottom: "40px",
});

const StyledTypography = styled(Typography)({
  marginBottom: "20px",
});

function App() {
  return (
    <Router>
      <Header />
      <div style={{ padding: "20px" }}>
        {/* <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={Projects} />
          <Route path="/contact" element={Contact} />
        </Routes> */}
        <StyledContainer>
          <StyledTypography variant="h2" gutterBottom>
            안녕하세요, 방진성입니다.
          </StyledTypography>
          <StyledTypography variant="h6">
            커뮤니케이션 전문 개발자로서 다양한 프로젝트 경험을 바탕으로
            팀원들과 원활하게 협업하며 목표를 효과적으로 달성하고자 합니다.
          </StyledTypography>
          <Button variant="contained" color="primary">
            포트폴리오 보기
          </Button>
        </StyledContainer>
      </div>
    </Router>
  );
}

export default App;

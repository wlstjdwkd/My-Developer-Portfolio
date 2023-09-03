import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import { Button, Typography } from "@mui/material";

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
export default Header;

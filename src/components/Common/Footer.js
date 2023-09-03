import React from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import velogIcon from "../../assets/images/velog_icon.png";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box bgcolor="primary.main" color="white" py={3} mt={5}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1">
            © 2023 방진성. All rights reserved.
          </Typography>
          <Box>
            <IconButton color="inherit" href="https://github.com/wlstjdwkd">
              <GitHubIcon />
            </IconButton>
            <IconButton color="inherit" href="https://velog.io/@wlstjdwkd">
              <img
                src={velogIcon}
                alt="Velog Icon"
                width="34.28"
                height="34.28"
                style={{ borderRadius: "50%" }}
              />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.instagram.com/bvng._.mooomiin/"
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

import React from "react";
import {
  Container,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Skills from "./Skills";
import springbootImage from "../../assets/images/springboot.png";
import reactnativeImage from "../../assets/images/react_native.png";

function TechStack() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ marginBottom: "20px" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" align="center">
              기술 스택
            </Typography>
          </AccordionSummary>
          <Skills
            imageURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            label="Java"
            proficiency={90}
          />
          <Skills
            imageURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            label="JavaScript"
            proficiency={70}
          />
          <Skills
            imageURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
            label="Spring"
            proficiency={90}
          />
          <Skills
            imageURL={springbootImage}
            label="SpringBoot"
            proficiency={90}
          />
          <Skills
            imageURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg
        "
            label="React"
            proficiency={70}
          />
          <Skills
            imageURL={reactnativeImage}
            label="ReactNative"
            proficiency={60}
          />
          <Skills
            imageURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg
        "
            label="MySQL"
            proficiency={90}
          />
          <Skills
            imageURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg
        "
            label="AWS"
            proficiency={80}
          />
          <Skills
            imageURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg
        "
            label="Docker"
            proficiency={80}
          />
          <Skills
            imageURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg
        "
            label="Jenkins"
            proficiency={80}
          />
          <Skills
            imageURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg
        "
            label="Git"
            proficiency={80}
          />
        </Accordion>
      </Paper>
    </Container>
  );
}

export default TechStack;

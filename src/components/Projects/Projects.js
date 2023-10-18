import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

import stopwaitingImage from "../../assets/images/stopwaiting.png";
import weffyImage from "../../assets/images/WEFFY.png";
import umbrellaImage from "../../assets/images/umbrella.jpg";
import techblue from "../../assets/images/techblue.png";
import yongyongLogo from "../../assets/images/yongyongLogo.png";
import ReactMarkdown from "react-markdown";

const projects = [
  {
    title: "StopWaiting",
    description: "스마트워치와 모바일을 이용한 교내 행사 관리/예약 시스템",
    imageUrl: stopwaitingImage,
    projectUrl: "https://github.com/wlstjdwkd/StopWaiting",
  },
  {
    title: "중소기업형 인사급여휴가관리 시스템",
    description: "실무자 협업 프로젝트",
    imageUrl: techblue,
    projectUrl: "https://github.com/wlstjdwkd/Company-Management-System",
  },
  {
    title: "WEFFY",
    description: "SSAFY를 위한 화상 미팅 프로그램",
    imageUrl: weffyImage,
    projectUrl: "https://github.com/wlstjdwkd/WEFFY",
  },
  {
    title: "포트폴리오 사이트",
    description: "나 자신을 알리기 위한 포트폴리오 사이트",
    imageUrl: umbrellaImage,
    projectUrl: "https://github.com/wlstjdwkd/My-Developer-Portfolio",
  },
  {
    title: "포도은행 & 도토리",
    description:
      "자체 은행 서비스 ‘포도은행’과 목표와 저축으로 계획적인 금융 습관을 만드는 서비스 ‘도토리’",
    imageUrl: yongyongLogo,
    projectUrl: "https://github.com/wlstjdwkd/PodoBank-Dotori",
  },

  // ... 여러 프로젝트들을 추가하세요
];

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardActionArea href={project.projectUrl} target="_blank">
              <CardMedia
                component="img"
                height="200"
                image={project.imageUrl}
                alt={project.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "240px",
                  objectFit: "contain",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Projects;

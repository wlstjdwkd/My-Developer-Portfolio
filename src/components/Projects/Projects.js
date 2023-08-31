import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

import stopwaitingImage from "../../assets/images/stopwaiting.png";
import weffyImage from "../../assets/images/WEFFY.png";
import umbrellaImage from "../../assets/images/umbrella.jpg";

const projects = [
  {
    title: "StopWaiting",
    description: "스마트워치와 모바일을 이용한 교내 행사 관리/예약 시스템",
    imageUrl: stopwaitingImage,
    projectUrl: "https://github.com/wlstjdwkd/StopWaiting",
  },
  {
    title: "중소기업형 인사급여휴가관리 시스템",
    description: "This is a brief description about project 2.",
    imageUrl: "path_to_project_2_image.jpg",
    projectUrl: "http://example2.com",
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
    title: "포도은행 + 디비딩",
    description: "핀테크 프로젝트(진행중)",
    imageUrl: umbrellaImage,
    projectUrl: "",
  },

  // ... 여러 프로젝트들을 추가하세요
];

function Projects() {
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

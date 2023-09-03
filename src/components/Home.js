import React from "react";
import { Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import profileImage from "../assets/images/umbrella.jpg";

const StyledImage = styled("img")({
  width: "100%",
  maxWidth: "400px",
  height: "auto",
  borderRadius: "5px",
});

const HighlightedText = styled("span")({
  color: "#00BFFE",
  fontWeight: "bold",
});

function Home() {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          안녕하세요, 방진성입니다.
        </Typography>
        <Typography variant="subtitle1">
          졸업 후에도 두 번의 소프트웨어 교육을 수강함으로써 공백이 없게
          준비하고 있습니다. <br />
          커뮤니케이션 전문 개발자로서 다양한 프로젝트 경험을 바탕으로 팀원들과
          원활하게 협업하며 목표를 효과적으로 달성하고자 합니다.
          <br />
          <HighlightedText>백엔드 개발자</HighlightedText>를 지향하고 있으며
          다른 개발 포지션과의 원활한 커뮤니케이션을 위해 프론트엔드, 인프라도
          병행 학습하고 있습니다.test
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} container justifyContent="flex-end">
        <StyledImage src={profileImage} alt="방진성 프로필 이미지" />
      </Grid>
    </Grid>
  );
}

export default Home;

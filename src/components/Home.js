import React from "react";
import { Button, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import profileImage from "../assets/images/umbrella.jpg";

const StyledContainer = styled(Container)({
  textAlign: "center",
  paddingTop: "40px",
  paddingBottom: "40px",
});

const StyledImage = styled("img")({
  width: "100%",
  maxWidth: "400px", // 원하는 최대 너비를 설정할 수 있습니다.
  height: "auto",
  borderRadius: "5px", // 약간의 모서리를 둥글게 하려면 값을 조정할 수 있습니다.
});

function Home() {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          안녕하세요, 방진성입니다.
        </Typography>
        <Typography variant="subtitle1">
          졸업 후에도 두 번의 소프트웨어 교육을 수강함으로써 공백이 없게 준비하고 있습니다.
          커뮤니케이션 전문 개발자로서 다양한 프로젝트 경험을 바탕으로 팀원들과
          원활하게 협업하며 목표를 효과적으로 달성하고자 합니다. 해치웠나?
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} container justifyContent="flex-end">
        <StyledImage src={profileImage} alt="방진성 프로필 이미지" />
      </Grid>
    </Grid>
  );
}

export default Home;

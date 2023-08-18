import {
  Button,
  Typography,
  Container,
  Grid,
  Paper,
  Box,
  Avatar,
  Link,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import InstagramIcon from "@mui/icons-material/Instagram";
import profileImage from "../../assets/images/profileImage.jpg";
import PersonalDetail from "./PersonalDetail";
import Certifications from "./Certifications";

function About() {
  console.log("About");
  return (
    <Container
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box style={{ padding: "2rem", width: "100%" }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Avatar
              src={profileImage} // 대신 원하시는 이미지 URL을 넣으세요
              alt="Profile Image"
              sx={{ width: 150, height: 150 }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4">방진성</Typography>
            <Typography variant="body1">성별: 남자</Typography>
            <Typography variant="body1">나이: 26</Typography>
            <Typography variant="body1">생년월일: 1998년 11월 26일</Typography>
            <Box display="flex" alignItems="center" marginTop="0.5rem">
              <MailOutlineIcon style={{ marginRight: "0.5rem" }} />
              <Typography variant="body1">xkakrlfh@naver.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" marginTop="0.5rem">
              <PhoneAndroidIcon style={{ marginRight: "0.5rem" }} />
              <Typography variant="body1">+82-10-4588-5698</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1">한문이름: 房眞聲</Typography>
            <Typography variant="body1">영문이름: Bang JinSeong</Typography>
            <Typography variant="body1">
              주소: <br />
              (61766) 광주광역시 남구 효우로 332
            </Typography>
            <Box display="flex" alignItems="center" marginTop="0.5rem">
              <InstagramIcon style={{ marginRight: "0.5rem" }} />
              <Link
                href="https://instagram.com/bvng._.mooomiin"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                @bvng._.mooomiin
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <br />
      <hr />

      <PersonalDetail />

      <Certifications />
      {/* Hero Section */}
      <Box my={5} style={{ textAlign: "center" }}>
        <Typography variant="h2">안녕하세요, 저는 방진성입니다.</Typography>
        <Typography variant="h5">백엔드 개발자로 활동 중입니다.</Typography>
        <Button variant="contained" color="primary">
          내 프로젝트 보기
        </Button>
      </Box>

      {/* Skills Section */}
      <Grid container spacing={3} justify="center">
        <Grid item xs={4}>
          <Paper>
            <Typography variant="h6">React</Typography>
            <Typography>React를 사용한 프론트엔드 개발 경험.</Typography>
          </Paper>
        </Grid>
        {/* ... other skills */}
      </Grid>

      {/* Projects Highlight */}
      {/* ... similar to Skills section but with project details */}

      {/* Testimonials */}
      {/* ... possibly use Card component from MUI with testimonial text and author image. */}

      {/* Call to Action */}
      <Box my={5}>
        <Typography variant="h4">
          저와 함께 프로젝트를 시작하실 준비가 되셨나요?
        </Typography>
        <Button variant="contained" color="secondary">
          연락하기
        </Button>
      </Box>
    </Container>
  );
}

export default About;

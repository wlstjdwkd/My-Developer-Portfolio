import {
  Typography,
  Container,
  Grid,
  Box,
  Avatar,
  Link,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonalDetail from "./PersonalDetail";
import Certifications from "./Certifications";
import Educations from "./Educations";
import TechStack from "./TechStack";

import profileImage from "../../assets/images/profileImage.jpg";

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
              src={profileImage}
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

      <Educations />

      <TechStack />

    </Container>
  );
}

export default About;

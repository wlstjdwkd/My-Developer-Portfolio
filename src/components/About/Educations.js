import React from "react";
import {
  Container,
  Typography,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";

function Educations() {

  const StyledListItemText = styled(ListItemText)(({ theme }) => ({
    "& .MuiListItemText-primary": {
      fontWeight: "bold",
      color: theme.palette.primary.main,
    },
  }));

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ marginBottom: "20px" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" align="center">
              교육이수사항
            </Typography>
          </AccordionSummary>
          <List dense>
            <ListItem>
              <StyledListItemText
                primary="교육명"
                secondary="경북 네트워크형 캠퍼스 SW아카데미"
              />
            </ListItem>
            <ListItem>
              <StyledListItemText
                primary="교육기관"
                secondary="경북SW진흥본부"
              />
            </ListItem>

            <ListItem>
              <StyledListItemText
                primary="이수기간"
                secondary="2022.07.01 ~ 2022.11.18"
              />
            </ListItem>
            <ListItem>
              <StyledListItemText primary="교육시간" secondary="640시간" />
            </ListItem>
            <ListItem>
              <StyledListItemText
                primary="주요내용"
                secondary={
                  <>
                    <span>
                      WEB/Framework Front-end(HTML5, CSS3, JavaScript, React)
                    </span>
                    <br />
                    <span>
                      Back-end(Node.js, Express, SpringBoot, DataBase)
                    </span>
                    <br />
                    <span>개인 프로젝트, 팀 프로젝트</span>
                  </>
                }
              />
            </ListItem>
          </List>

          <Divider sx={{ height: "2px", backgroundColor: "grey.700" }} />

          <List dense>
            <ListItem>
              <StyledListItemText
                primary="교육명"
                secondary="삼성청년SW아카데미"
              />
            </ListItem>
            <ListItem>
              <StyledListItemText primary="교육기관" secondary="삼성전자" />
            </ListItem>

            <ListItem>
              <StyledListItemText primary="이수기간" secondary="2023.01.04 ~" />
            </ListItem>
            <ListItem>
              <StyledListItemText primary="교육시간" secondary="800시간 + α" />
            </ListItem>
            <ListItem>
              <StyledListItemText
                primary="주요내용"
                secondary={
                  <>
                    <span>
                      알고리즘, WEB/Framework Front-end(HTML5, CSS3, JavaScript,
                      Vue)
                    </span>
                    <br />
                    <span>
                      Back-end(Servlet, JSP, Spring, SpringBoot, MyBatis,
                      Database)
                    </span>
                    <br />
                    <span>팀 프로젝트</span>
                    <br />
                    <span>
                      상반기에 800시간 수강하였고, 현재 하반기에 팀 프로젝트
                      위주 교육을 수강하고 있습니다.
                    </span>
                  </>
                }
              />
            </ListItem>
          </List>
        </Accordion>
      </Paper>
    </Container>
  );
}

export default Educations;

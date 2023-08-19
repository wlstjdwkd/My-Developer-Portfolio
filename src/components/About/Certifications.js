import React from "react";
import {
  Container,
  Typography,
  Divider,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function Certifications() {
  const theme = createTheme();

  const StyledListItemText = styled(ListItemText)(({ theme }) => ({
    "& .MuiListItemText-primary": {
      fontWeight: "bold",
      color: theme.palette.primary.main,
    },
  }));

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ marginBottom: "20px" }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" align="center">
                어학/자격/기타
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box width="100%">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">어학성적</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        <StyledListItemText
                          primary="TOEIC"
                          secondary="118466 / 2022.02.27 / 680"
                        />
                      </ListItem>
                      <Divider
                        sx={{ height: "2px", backgroundColor: "grey.700" }}
                      />
                      <ListItem>
                        <StyledListItemText
                          primary="OPIC"
                          secondary="2E6491315390 / 2023.07.16 / IM1"
                        />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Divider style={{ margin: "16px 0" }} />

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">자격증</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        <StyledListItemText
                          primary="정보처리기사"
                          secondary="22201250136L / 2022.06.17 / 한국산업인력공단"
                        />
                      </ListItem>
                      <Divider
                        sx={{ height: "2px", backgroundColor: "grey.700" }}
                      />
                      <ListItem>
                        <StyledListItemText
                          primary="컴퓨터활용능력1급"
                          secondary="20-K9-003859 / 2020.01.31 / 대한상공회의소"
                        />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Divider style={{ margin: "16px 0" }} />

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">수상경력</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        <StyledListItemText
                          primary="수상명"
                          secondary="KIT Engineering Fair 2022 동상"
                        />
                      </ListItem>
                      <ListItem>
                        <StyledListItemText
                          primary="수상기관"
                          secondary="금오공과대학교 공학교육혁신센터"
                        />
                      </ListItem>

                      <ListItem>
                        <StyledListItemText
                          primary="수상일자"
                          secondary="2022.12.22"
                        />
                      </ListItem>
                      <ListItem>
                        <StyledListItemText
                          primary="수상내역"
                          secondary={
                            <>
                              <span>
                                스마트 워치와 앱을 이용한 교내 웨이팅 어플을
                                개발하였습니다.
                              </span>
                              <br />
                              <span>
                                백엔드(Firebase Cloud Messaging Service 통신,
                                예약 대기열 관리, 웨이팅 조회/등록/수정 관리),
                              </span>
                              <br />
                              <span>스마트워치 파트를 맡았습니다.</span>
                            </>
                          }
                        />
                      </ListItem>
                    </List>

                    <Divider
                      sx={{ height: "2px", backgroundColor: "grey.700" }}
                    />

                    <List dense>
                      <ListItem>
                        <StyledListItemText
                          primary="수상명"
                          secondary="제 1회 Webkit640 팀 프로젝트 장려상"
                        />
                      </ListItem>
                      <ListItem>
                        <StyledListItemText
                          primary="수상기관"
                          secondary="경북SW진흥본부"
                        />
                      </ListItem>

                      <ListItem>
                        <StyledListItemText
                          primary="수상일자"
                          secondary="2022.11.15"
                        />
                      </ListItem>
                      <ListItem>
                        <StyledListItemText
                          primary="수상내역"
                          secondary={
                            <>
                              <span>
                                한 유관회사의 웹 프레임워크를 기반으로 협업하여
                                중소기업형 인사급여휴가관리 시스템을
                                개발하였습니다.
                              </span>
                              <br />
                              <span>백엔드(인사 관리, 급여 관리),</span>
                              <br />
                              <span>프론트엔드(급여 관리)를 맡았습니다.</span>
                            </>
                          }
                        />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
                

              </Box>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default Certifications;

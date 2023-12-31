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
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function PersonalDetails() {
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
              인적사항
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box width="100%">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">고등학교</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List dense>
                    <ListItem>
                      <StyledListItemText
                        primary="학교명"
                        secondary="광주동성고등학교 (광주) / 인문 / 주간"
                      />
                    </ListItem>
                    <ListItem>
                      <StyledListItemText
                        primary="기간"
                        secondary="2014.03 - 2017.02"
                      />
                    </ListItem>
                    <ListItem>
                      <StyledListItemText primary="졸업여부" secondary="졸업" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>

              <Divider style={{ margin: "16px 0" }} />

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">대학교</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List dense>
                    <ListItem>
                      <StyledListItemText
                        primary="학교명"
                        secondary="금오공과대학교 (경북) / 본교"
                      />
                    </ListItem>
                    <ListItem>
                      <StyledListItemText primary="입학구분" secondary="입학" />
                    </ListItem>
                    <ListItem>
                      <StyledListItemText
                        primary="전공"
                        secondary="컴퓨터소프트웨어공학과"
                      />
                    </ListItem>
                    <ListItem>
                      <StyledListItemText
                        primary="기간"
                        secondary="2017.03 - 2023.02"
                      />
                    </ListItem>
                    <ListItem>
                      <StyledListItemText
                        primary="성적"
                        secondary="3.8 / 4.5"
                      />
                    </ListItem>
                    <ListItem>
                      <StyledListItemText primary="졸업여부" secondary="졸업" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>

              <Divider style={{ margin: "16px 0" }} />

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">병역사항</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List dense>
                    <ListItem>
                      <StyledListItemText
                        primary="병과"
                        secondary="기록통신병"
                      />
                    </ListItem>
                    <ListItem>
                      <StyledListItemText
                        primary="입대일"
                        secondary="2018.01.22"
                      />
                    </ListItem>
                    <ListItem>
                      <StyledListItemText
                        primary="제대일"
                        secondary="2019.09.23"
                      />
                    </ListItem>
                    <ListItem>
                      <StyledListItemText primary="계급" secondary="병장" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Container>
  );
}

export default PersonalDetails;

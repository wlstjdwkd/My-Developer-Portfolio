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

function Certifications() {
  return (
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
                      <ListItemText
                        primary="TOEIC"
                        secondary="118466 / 2022.02.27 / 680"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
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
                      <ListItemText
                        primary="정보처리기사"
                        secondary="22201250136L / 2022.06.17 / 한국산업인력공단"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="컴퓨터활용능력1급" secondary="20-K9-003859 / 2020.01.31 / 대한상공회의소" />
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
                      <ListItemText primary="병과" secondary="예비군" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="입대일" secondary="2018.01.01" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="제대일" secondary="2019.12.31" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="계급" secondary="병장" />
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

export default Certifications;

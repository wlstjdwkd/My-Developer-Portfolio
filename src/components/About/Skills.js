import React from "react";
import { LinearProgress, Typography, Box } from "@mui/material";

function Skills({ imageURL, label, proficiency }) {
  return (
    <Box display="flex" alignItems="center" marginBottom={3} paddingX={3}>
      <Box display="flex" alignItems="center" width={450}>
        <img
          src={imageURL}
          style={{ width: "50px", height: "50px" }} 
        />

        <Typography variant="h6" marginLeft={8}>
          {label}
        </Typography>
      </Box>
      <Box width="70%" marginLeft={2} marginRight={2}>
        <LinearProgress
          variant="determinate"
          value={proficiency}
          style={{ height: 20 }}
        />
      </Box>
      <Typography variant="h6">{proficiency}%</Typography>
    </Box>
  );
}
export default Skills;

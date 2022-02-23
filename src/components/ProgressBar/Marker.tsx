import React from "react";
import { Box, Typography } from "@mui/material";
import { getMinutes, getSeconds } from "utils/getMinutesSeconds";

interface MarkerProps {
  relativePosition: number;
  time: number;
}

const Marker: React.FC<MarkerProps> = ({ relativePosition, time }) => {
  return (
    <Box
      sx={{
        left: `${relativePosition * 100}%`,
        position: "absolute",
        height: "100%",
        top: 0,
      }}
    >
      <Box
        height="140%"
        width={2}
        sx={{
          position: "absolute",
          top: "-20%",
          backgroundColor: "secondary.main",
        }}
      />
      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          top: "120%",
          left: "-50%",
          textAlign: "center",
        }}
      >
        {getMinutes(time)}:{getSeconds(time)}
      </Typography>
    </Box>
  );
};

export default Marker;

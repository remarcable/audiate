import React from "react";
import { Box, Typography } from "@mui/material";
import { getMinutes, getSeconds } from "utils/getMinutesSeconds";
import { MarkerType } from "state/playerSlice";

interface MarkerProps {
  relativePosition: number;
  time: number;
  type: MarkerType;
}

const markerColor = {
  [MarkerType.Measure]: "secondary.main",
  [MarkerType.Jump]: "error.main",
};

const Marker: React.FC<MarkerProps> = ({ relativePosition, time, type }) => {
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
          backgroundColor: markerColor[type],
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

import React, { useCallback, useRef } from "react";
import { Box } from "@mui/material";

import { useBoundingClientRect } from "hooks/useBoundingClientRect";

import ProgressText from "./ProgressText";
import Marker from "./Marker";

interface ProgressBarProps {
  progress: number;
  audioDuration: number;
  markers: number[];
  onClick: (seekTo: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  audioDuration,
  markers,
  onClick,
}) => {
  const ref = useRef(null);
  const boundingClientRect = useBoundingClientRect(ref);

  const onElementClick = useCallback(
    (e) => {
      const { x: startX, width } = boundingClientRect;
      onClick((e.clientX - startX) / width);
    },
    [onClick, boundingClientRect]
  );

  return (
    <Box
      mt={2}
      pb={3}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ProgressText duration={audioDuration} progress={progress} />
      <Box
        sx={{
          backgroundColor: "divider",
          height: 40,
          position: "relative",
          borderRadius: 1,
        }}
        onClick={onElementClick}
        ref={ref}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            height: "100%",
            borderTopLeftRadius: (theme) => theme.shape.borderRadius,
            borderBottomLeftRadius: (theme) => theme.shape.borderRadius,
          }}
          style={{ width: `${progress * 100}%` }}
        />
        {markers.map((relativePosition, i) => {
          return (
            <Marker
              key={i}
              audioDuration={audioDuration}
              relativePosition={relativePosition}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ProgressBar;

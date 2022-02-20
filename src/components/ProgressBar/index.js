import { useCallback, useRef } from "react";
import { Box } from "@mui/material";

import { useBoundingClientRect } from "hooks/useBoundingClientRect";

import ProgressText from "./ProgressText";
import Marker from "./Marker";

const ProgressBar = ({ progress, audioDuration, markers, onClick }) => {
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
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ProgressText duration={audioDuration} progress={progress} />
      <Box
        sx={{
          backgroundColor: "primary.light",
          height: 40,
          position: "relative",
        }}
        onClick={onElementClick}
        ref={ref}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            height: "100%",
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

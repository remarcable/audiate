import { useCallback, useRef } from "react";
import { Box } from "@mui/material";

import { useBoundingClientRect } from "hooks/useBoundingClientRect";

const ProgressBar = ({ progress, onClick }) => {
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
      sx={{ backgroundColor: "primary.light", height: 40 }}
      onClick={onElementClick}
      ref={ref}
    >
      <Box
        sx={{ backgroundColor: "primary.main", height: "100%" }}
        width={`${(progress * 100).toFixed(2)}%`}
      />
    </Box>
  );
};

export default ProgressBar;

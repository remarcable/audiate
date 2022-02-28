import { useState, useCallback, type MouseEvent } from "react";

export const useAnchorElement = <T>(callback: (val: T) => void) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOnOpen = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      setAnchorEl(e.currentTarget);
    },
    [setAnchorEl]
  );

  const handleOnClose = useCallback(
    (value) => {
      if (value) {
        callback(value);
      }

      setAnchorEl(null);
    },
    [callback, setAnchorEl]
  );

  return [anchorEl, handleOnOpen, handleOnClose] as const;
};

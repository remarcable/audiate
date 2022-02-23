import React, { type MouseEvent, useState } from "react";

import { Button, ButtonGroup, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import JumpDialog from "./JumpDialog";

const SPEED_OPTIONS = [0.5, 1, 1.5, 2];

interface PlaybackMenuProps {
  speed: number;
  playing: boolean;
  setPlaying: (playing: boolean) => void;
  setSpeed: (speed: typeof SPEED_OPTIONS[number]) => void;
  addMeasureMarker: () => void;
  addJumpMarker: (jumpToMeasure: number) => void;
}
const PlaybackMenu: React.FC<PlaybackMenuProps> = ({
  speed,
  playing,
  setPlaying,
  setSpeed,
  addMeasureMarker,
  addJumpMarker,
}) => {
  const [jumpDialogOpen, setJumpDialogOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleSpeedButtonClick = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const makeSpeedButtonHandleClose = (speed: number | null) => () => {
    if (speed) {
      setSpeed(speed);
    }

    setAnchorEl(null);
  };
  return (
    <>
      <ButtonGroup sx={{ ml: 3 }}>
        <Button onClick={() => setPlaying(!playing)}>
          {playing ? "Pause" : "Play"}
        </Button>
        <Button
          onClick={handleSpeedButtonClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Speed
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={makeSpeedButtonHandleClose(null)}
          anchorOrigin={{ horizontal: 20, vertical: "bottom" }}
        >
          {SPEED_OPTIONS.map((speedMenuItem) => (
            <MenuItem
              key={speedMenuItem}
              selected={speed === speedMenuItem}
              onClick={makeSpeedButtonHandleClose(speedMenuItem)}
            >
              {speedMenuItem.toFixed(1)}x
            </MenuItem>
          ))}
        </Menu>
        <Button onClick={() => addMeasureMarker()}>Set Marker</Button>
        <Button onClick={() => setJumpDialogOpen(true)}>Set Jump Marker</Button>
      </ButtonGroup>
      <JumpDialog
        open={jumpDialogOpen}
        handleClose={(jumpToMeasure) => {
          setJumpDialogOpen(false);
          if (jumpToMeasure) {
            addJumpMarker(jumpToMeasure);
          }
        }}
      />
    </>
  );
};

export default PlaybackMenu;

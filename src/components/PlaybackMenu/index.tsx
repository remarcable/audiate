import React, { useCallback } from "react";

import {
  Box,
  Menu,
  MenuItem,
  Tooltip,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  FlagOutlined,
  Forward5Outlined,
  PauseOutlined,
  PlayArrowOutlined,
  Replay5Outlined,
  SpeedOutlined,
  TourOutlined,
} from "@mui/icons-material";

import {
  type SpeedOption,
  SPEED_OPTIONS,
  playerActions,
  DialogType,
} from "state/playerSlice";
import { useAppDispatch, useAppSelector } from "state/hooks";

import { useAnchorElement } from "hooks/useAnchorElement";

import CreateJumpMarkerDialog from "./CreateJumpMarkerDialog";

interface PlaybackMenuProps {
  relativeSeek: (seconds: number) => void;
}

const PlaybackMenu: React.FC<PlaybackMenuProps> = ({ relativeSeek }) => {
  const dispatch = useAppDispatch();
  const { playing, speed, dialogOpen } = useAppSelector(
    (state) => state.player
  );

  const setPlaying = useCallback(
    (playing: boolean) => dispatch(playerActions.setPlaying(playing)),
    [dispatch]
  );

  const setSpeed = useCallback(
    (speed: number) => dispatch(playerActions.setSpeed(speed)),
    [dispatch]
  );
  const [speedAnchorEl, handleSpeedButtonClick, handleSpeedMenuClose] =
    useAnchorElement<SpeedOption>(setSpeed);

  const addMeasureMarker = useCallback(
    () => dispatch(playerActions.addMeasureMarker()),
    [dispatch]
  );
  const openJumpToMeasureDialog = useCallback(
    () => dispatch(playerActions.openJumpToMeasureDialog()),
    [dispatch]
  );
  const handleJumpMarkerDialogClose = useCallback(
    (jumpToMeasure: number | null) =>
      dispatch(playerActions.handleJumpMarkerDialogClose(jumpToMeasure)),
    [dispatch]
  );

  const seekBackwards = useCallback(() => relativeSeek(-5), [relativeSeek]);
  const seekForward = useCallback(() => relativeSeek(5), [relativeSeek]);

  const theme = useTheme();
  const useSmallToggleButtons = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ToggleButtonGroup
        aria-label="playback menu"
        color="primary"
        size={useSmallToggleButtons ? "small" : "medium"}
      >
        <Tooltip title="Rewind 5s" onClick={seekBackwards}>
          <ToggleButton value="speed">
            <Replay5Outlined />
          </ToggleButton>
        </Tooltip>
        <Tooltip title={playing ? "Pause" : "Play"}>
          <ToggleButton value="playing" onClick={() => setPlaying(!playing)}>
            {playing ? <PauseOutlined /> : <PlayArrowOutlined />}
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Fast forward 5s">
          <ToggleButton value="speed" onClick={seekForward}>
            <Forward5Outlined />
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        aria-label="playback options"
        sx={{ ml: 2 }}
        size={useSmallToggleButtons ? "small" : "medium"}
      >
        <Tooltip title="Change playback speed">
          <ToggleButton value="speed" onClick={handleSpeedButtonClick}>
            <SpeedOutlined />
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Set Marker" onClick={addMeasureMarker}>
          <ToggleButton value="marker">
            <FlagOutlined />
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Set Jump Marker" onClick={openJumpToMeasureDialog}>
          <ToggleButton value="jumpmarker">
            <TourOutlined />
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
      <Menu
        anchorEl={speedAnchorEl}
        open={!!speedAnchorEl}
        onClose={() => handleSpeedMenuClose(null)}
        anchorOrigin={{ horizontal: -8, vertical: "bottom" }}
      >
        {SPEED_OPTIONS.map((speedMenuItem) => (
          <MenuItem
            key={speedMenuItem}
            selected={speed === speedMenuItem}
            onClick={() => handleSpeedMenuClose(speedMenuItem)}
          >
            {speedMenuItem.toFixed(1)}x
          </MenuItem>
        ))}
      </Menu>
      <CreateJumpMarkerDialog
        open={dialogOpen === DialogType.JumpToMeasure}
        handleClose={handleJumpMarkerDialogClose}
      />
    </Box>
  );
};

export default React.memo(PlaybackMenu);

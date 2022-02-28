import React, { useCallback } from "react";

import { Button, ButtonGroup, IconButton, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useAppDispatch, useAppSelector } from "state/hooks";

import CreateJumpMarkerDialog from "./CreateJumpMarkerDialog";
import HelpDialog from "./HelpDialog";

import {
  SPEED_OPTIONS,
  type SpeedOption,
  playerActions,
  DialogType,
} from "state/playerSlice";
import {
  exportNames,
  exportOptions,
  type ExportFileType,
} from "lib/fileExport";
import { useAnchorElement } from "hooks/useAnchorElement";
import { Delete, Help } from "@mui/icons-material";

const PlaybackMenu: React.FC = () => {
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
  const addMeasureMarker = useCallback(
    () => dispatch(playerActions.addMeasureMarker()),
    [dispatch]
  );
  const openJumpToMeasureDialog = useCallback(
    () => dispatch(playerActions.openJumpToMeasureDialog()),
    [dispatch]
  );
  const openHelpDialog = useCallback(
    () => dispatch(playerActions.openHelpDialog()),
    [dispatch]
  );
  const handleJumpMarkerDialogClose = useCallback(
    (jumpToMeasure: number | null) =>
      dispatch(playerActions.handleJumpMarkerDialogClose(jumpToMeasure)),
    [dispatch]
  );
  const handleHelpDialogClose = useCallback(
    () => dispatch(playerActions.closeHelpDialog()),
    [dispatch]
  );
  const exportAsFile = useCallback(
    (fileType: ExportFileType) =>
      dispatch(playerActions.exportAsFile(fileType)),
    [dispatch]
  );

  const [speedAnchorEl, handleSpeedButtonClick, handleSpeedMenuClose] =
    useAnchorElement<SpeedOption>(setSpeed);
  const [exportAnchorEl, handleExportButtonClick, handleExportMenuClose] =
    useAnchorElement<ExportFileType>(exportAsFile);

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
          anchorEl={speedAnchorEl}
          open={!!speedAnchorEl}
          onClose={() => handleSpeedMenuClose(null)}
        >
          {SPEED_OPTIONS.map((speedMenuItem) => (
            <MenuItem
              sx={{ minWidth: 100 }}
              key={speedMenuItem}
              selected={speed === speedMenuItem}
              onClick={() => handleSpeedMenuClose(speedMenuItem)}
            >
              {speedMenuItem.toFixed(1)}x
            </MenuItem>
          ))}
        </Menu>
        <Button onClick={() => addMeasureMarker()}>Set Marker</Button>
        <Button onClick={() => openJumpToMeasureDialog()}>
          Add Jump Marker
        </Button>
        <Button
          onClick={handleExportButtonClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Export
        </Button>
        <Menu
          anchorEl={exportAnchorEl}
          open={!!exportAnchorEl}
          onClose={() => handleExportMenuClose(null)}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        >
          {exportOptions.map((exportOption) => (
            <MenuItem
              sx={{ minWidth: 110 }}
              key={exportOption}
              onClick={() => handleExportMenuClose(exportOption)}
            >
              {exportNames[exportOption]}
            </MenuItem>
          ))}
        </Menu>
      </ButtonGroup>
      <IconButton
        sx={{ ml: 2 }}
        color="primary"
        onClick={() => openHelpDialog()}
      >
        <Help />
      </IconButton>
      <CreateJumpMarkerDialog
        open={dialogOpen === DialogType.JumpToMeasure}
        handleClose={handleJumpMarkerDialogClose}
      />
      <HelpDialog
        open={dialogOpen === DialogType.Help}
        handleClose={handleHelpDialogClose}
      />
    </>
  );
};

export default React.memo(PlaybackMenu);

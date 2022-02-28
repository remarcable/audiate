import React, { useCallback } from "react";

import { Button, ButtonGroup, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useAppDispatch, useAppSelector } from "state/hooks";

import CreateJumpMarkerDialog from "./CreateJumpMarkerDialog";

import {
  SPEED_OPTIONS,
  type SpeedOption,
  playerActions,
} from "state/playerSlice";
import {
  exportNames,
  exportOptions,
  type ExportFileType,
} from "lib/fileExport";
import { useAnchorElement } from "hooks/useAnchorElement";

const PlaybackMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { playing, speed, jumpToMeasureDialogIsOpen } = useAppSelector(
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
  const handleJumpMarkerDialogClose = useCallback(
    (jumpToMeasure: number | null) =>
      dispatch(playerActions.handleJumpMarkerDialogClose(jumpToMeasure)),
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
          Set Jump Marker
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
      <CreateJumpMarkerDialog
        open={jumpToMeasureDialogIsOpen}
        handleClose={handleJumpMarkerDialogClose}
      />
    </>
  );
};

export default React.memo(PlaybackMenu);

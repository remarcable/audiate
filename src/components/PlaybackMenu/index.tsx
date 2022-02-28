import React from "react";

import { Button, ButtonGroup, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import CreateJumpMarkerDialog from "./CreateJumpMarkerDialog";

import { SPEED_OPTIONS, type SpeedOption } from "state/playerSlice";
import {
  exportNames,
  exportOptions,
  type ExportFileType,
} from "lib/fileExport";
import { useAnchorElement } from "hooks/useAnchorElement";

interface PlaybackMenuProps {
  speed: number;
  playing: boolean;
  setPlaying: (playing: boolean) => void;
  setSpeed: (speed: SpeedOption) => void;
  addMeasureMarker: () => void;

  exportAsFile: (fileType: ExportFileType) => void;

  jumpToMeasureDialogIsOpen: boolean;
  openJumpToMeasureDialog: () => void;
  handleJumpMarkerDialogClose: (jumpToMeasure: number | null) => void;
}

const PlaybackMenu: React.FC<PlaybackMenuProps> = ({
  speed,
  playing,
  setPlaying,
  setSpeed,
  addMeasureMarker,
  exportAsFile,
  jumpToMeasureDialogIsOpen,
  openJumpToMeasureDialog,
  handleJumpMarkerDialogClose,
}) => {
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

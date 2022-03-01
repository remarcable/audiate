import { useCallback } from "react";

import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { FileDownloadOutlined, HelpOutlineOutlined } from "@mui/icons-material";

import { useAppDispatch, useAppSelector } from "state/hooks";
import { DialogType, playerActions } from "state/playerSlice";

import { useAnchorElement } from "hooks/useAnchorElement";
import { ExportFileType, exportNames, exportOptions } from "lib/fileExport";

import HelpDialog from "components/HelpDialog";

interface FileInfoProps {
  fileName: string;
}

export const FileInfo: React.FC<FileInfoProps> = ({ fileName }) => {
  const dispatch = useAppDispatch();
  const helpDialogOpen = useAppSelector(
    (state) => state.player.dialogOpen === DialogType.Help
  );

  const openHelpDialog = useCallback(
    () => dispatch(playerActions.openHelpDialog()),
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

  const [exportAnchorEl, handleExportButtonClick, handleExportMenuClose] =
    useAnchorElement<ExportFileType>(exportAsFile);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {fileName}
        </Typography>
        <Box sx={{ minWidth: "fit-content" }}>
          <Tooltip title="Export Markers">
            <IconButton onClick={handleExportButtonClick}>
              <FileDownloadOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title="Keyboard Shortcuts">
            <IconButton onClick={openHelpDialog}>
              <HelpOutlineOutlined />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Menu
        anchorEl={exportAnchorEl}
        open={!!exportAnchorEl}
        onClose={() => handleExportMenuClose(null)}
        anchorOrigin={{ horizontal: -15, vertical: "bottom" }}
      >
        {exportOptions.map((exportOption) => (
          <MenuItem
            key={exportOption}
            onClick={() => handleExportMenuClose(exportOption)}
          >
            {exportNames[exportOption]}
          </MenuItem>
        ))}
      </Menu>
      <HelpDialog open={helpDialogOpen} handleClose={handleHelpDialogClose} />
    </>
  );
};

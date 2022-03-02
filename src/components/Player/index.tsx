import React, { useCallback, useRef } from "react";
import type WaveSurfer from "wavesurfer.js";

import { Box, Paper } from "@mui/material";

import PlaybackMenu from "components/PlaybackMenu";
import MarkerList from "components/MarkerList";

import { playerActions } from "state/playerSlice";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { usePlayerHotkeys } from "hooks/usePlayerHotkeys";

import Waveform from "components/Waveform";
import { FileInfo } from "components/FileInfo";

const Player: React.FC = () => {
  const dispatch = useAppDispatch();
  const dialogIsOpen = useAppSelector((state) => !!state.player.dialogOpen);
  const fileName = useAppSelector((state) => state.app.file.name);

  const togglePlaying = useCallback(
    () => dispatch(playerActions.togglePlaying()),
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

  const waveSurferRef = useRef<WaveSurfer>(null);
  const relativeSeek = useCallback((seekSeconds: number) => {
    if (!waveSurferRef.current) return;
    waveSurferRef.current.skip(seekSeconds);
  }, []);
  const absoluteSeek = useCallback((seekSeconds: number) => {
    const waveSurfer = waveSurferRef.current;
    if (!waveSurfer) return;
    waveSurfer.seekTo(seekSeconds / waveSurfer.getDuration());
  }, []);

  usePlayerHotkeys({
    dialogIsOpen,
    togglePlaying,
    addMeasureMarker,
    openJumpToMeasureDialog,
    relativeSeek,
  });

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: (theme) => theme.zIndex?.appBar,
        }}
      >
        {/* Hide the table behind the sticky Player using a Box with the 
          backgroundColor: */}
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            height: (theme) => theme.spacing(2),
          }}
        ></Box>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <FileInfo fileName={fileName} />
          <Waveform waveSurferRef={waveSurferRef} />
          <PlaybackMenu relativeSeek={relativeSeek} />
        </Paper>
      </Box>
      <MarkerList seekTo={absoluteSeek} />
    </>
  );
};

export default Player;

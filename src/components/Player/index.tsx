import React, { useCallback, useRef } from "react";
import type WaveSurfer from "wavesurfer.js";

import { Box, Paper, Typography } from "@mui/material";

import PlaybackMenu from "components/PlaybackMenu";
import MarkerList from "components/MarkerList";

import { playerActions } from "state/playerSlice";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { usePlayerHotkeys } from "hooks/usePlayerHotkeys";

import Waveform from "components/Waveform";

const Player: React.FC = () => {
  const dispatch = useAppDispatch();
  const { jumpToMeasureDialogIsOpen } = useAppSelector((state) => state.player);
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

  usePlayerHotkeys({
    jumpToMeasureDialogIsOpen,
    togglePlaying,
    addMeasureMarker,
    openJumpToMeasureDialog,
    relativeSeek,
  });

  return (
    <>
      <Paper sx={{ mt: 2, p: 2 }} variant="outlined">
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6">{fileName}</Typography>
          <PlaybackMenu />
        </Box>

        <Waveform waveSurferRef={waveSurferRef} />
      </Paper>
      <MarkerList />
    </>
  );
};

export default Player;

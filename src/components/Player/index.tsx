import React, { useCallback, useRef } from "react";
import ReactPlayer from "react-player";

import { Box, Paper, Typography } from "@mui/material";

import ProgressBar from "components/ProgressBar";
import PlaybackMenu from "components/PlaybackMenu";
import MarkerList from "components/MarkerList";

import { playerActions } from "state/playerSlice";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { usePlayerHotkeys } from "hooks/usePlayerHotkeys";

import type { ExportFileType } from "lib/fileExport";

interface PlayerProps {
  file: {
    name: string;
    url: string;
    path: string;
  };
}

const Player: React.FC<PlayerProps> = ({ file }) => {
  const dispatch = useAppDispatch();
  const {
    playing,
    progress,
    duration,
    speed,
    jumpToMeasureDialogIsOpen,
    markers,
  } = useAppSelector((state) => state.player);
  const { url: fileUrl, name: fileName } = file;

  const setPlaying = (playing: boolean) =>
    dispatch(playerActions.setPlaying(playing));
  const togglePlaying = () => dispatch(playerActions.togglePlaying());
  const setProgress = (progress: number) =>
    dispatch(playerActions.setProgress(progress));
  const setDuration = (duration: number) =>
    dispatch(playerActions.setDuration(duration));
  const setSpeed = (speed: number) => dispatch(playerActions.setSpeed(speed));
  const addMeasureMarker = () => dispatch(playerActions.addMeasureMarker());
  const openJumpToMeasureDialog = () =>
    dispatch(playerActions.openJumpToMeasureDialog());
  const handleJumpMarkerDialogClose = (jumpToMeasure: number | null) =>
    dispatch(playerActions.handleJumpMarkerDialogClose(jumpToMeasure));
  const removeMarker = (marker: number) =>
    dispatch(playerActions.removeMarker(marker));
  const exportAsFile = (fileType: ExportFileType) =>
    dispatch(playerActions.exportAsFile(fileType));

  const playerRef = useRef<ReactPlayer>(null);

  const relativeSeek = useCallback(
    (seconds: number) => {
      if (!jumpToMeasureDialogIsOpen) {
        playerRef.current?.seekTo(progress * duration + seconds, "seconds");
      }
    },
    [progress, duration, jumpToMeasureDialogIsOpen]
  );

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
          <PlaybackMenu
            playing={playing}
            speed={speed}
            setPlaying={setPlaying}
            setSpeed={setSpeed}
            addMeasureMarker={addMeasureMarker}
            jumpToMeasureDialogIsOpen={jumpToMeasureDialogIsOpen}
            openJumpToMeasureDialog={openJumpToMeasureDialog}
            handleJumpMarkerDialogClose={handleJumpMarkerDialogClose}
            exportAsFile={exportAsFile}
          />
        </Box>

        <ReactPlayer
          url={fileUrl}
          playing={playing}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onProgress={({ played }) => setProgress(played)}
          onDuration={(duration) => setDuration(duration)}
          progressInterval={100}
          width={0}
          height={0}
          controls
          playbackRate={speed}
          config={{ file: { forceAudio: true } }}
          ref={playerRef}
        />

        <ProgressBar
          progress={progress}
          audioDuration={duration}
          markers={markers}
          onClick={(clickedAt) => playerRef.current?.seekTo(clickedAt)}
        />
      </Paper>
      <MarkerList removeMarker={removeMarker} markers={markers} />
    </>
  );
};

export default Player;

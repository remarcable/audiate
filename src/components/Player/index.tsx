import React, { useCallback, useMemo, useRef } from "react";

import { Box, Paper, Typography } from "@mui/material";

import PlaybackMenu from "components/PlaybackMenu";
import MarkerList from "components/MarkerList";

import { playerActions } from "state/playerSlice";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { usePlayerHotkeys } from "hooks/usePlayerHotkeys";

import type { ExportFileType } from "lib/fileExport";
import Waveform from "components/Waveform";
import { getMarkersWithMeasures } from "lib/getMarkersWithMeasures";

interface PlayerProps {
  file: {
    name: string;
    url: string;
    path: string;
  };
}

const Player: React.FC<PlayerProps> = ({ file }) => {
  const dispatch = useAppDispatch();
  const { playing, time, duration, speed, jumpToMeasureDialogIsOpen, markers } =
    useAppSelector((state) => state.player);
  const { url: fileUrl, name: fileName } = file;

  const setPlaying = useCallback(
    (playing: boolean) => dispatch(playerActions.setPlaying(playing)),
    [dispatch]
  );
  const togglePlaying = useCallback(
    () => dispatch(playerActions.togglePlaying()),
    [dispatch]
  );
  const setTime = useCallback(
    (time: number) => dispatch(playerActions.setTime(time)),
    [dispatch]
  );
  const setProgress = useCallback(
    (progress: number) => dispatch(playerActions.setProgress(progress)),
    [dispatch]
  );
  const setDuration = useCallback(
    (duration: number) => dispatch(playerActions.setDuration(duration)),
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
  const updateMarkerTime = useCallback(
    ({ oldMeasure, newMarkerTime }) =>
      dispatch(playerActions.updateMarkerTime({ oldMeasure, newMarkerTime })),
    [dispatch]
  );
  const removeMarker = useCallback(
    (marker: number) => dispatch(playerActions.removeMarker(marker)),
    [dispatch]
  );
  const exportAsFile = useCallback(
    (fileType: ExportFileType) =>
      dispatch(playerActions.exportAsFile(fileType)),
    [dispatch]
  );

  const markersWithMeasures = useMemo(
    () => getMarkersWithMeasures(markers),
    [markers]
  );

  const waveSurferRef = useRef(null);
  const relativeSeek = useCallback(
    (seekSeconds: number) => {
      const clamp = (lower, upper, value) =>
        Math.min(upper, Math.max(lower, value));
      const nextProgress = clamp(0, 1, (time + seekSeconds) / duration);
      waveSurferRef.current.seekTo(nextProgress);
    },
    [time, duration]
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

        <Waveform
          url={fileUrl}
          playing={playing}
          onPlay={useCallback(() => setPlaying(true), [setPlaying])}
          onPause={useCallback(() => setPlaying(false), [setPlaying])}
          onEnded={useCallback(() => setPlaying(false), [setPlaying])}
          onTime={useCallback((time) => setTime(time), [setTime])}
          updateMarkerTime={useCallback(
            ({ oldMeasure, newMarkerTime }) =>
              updateMarkerTime({ oldMeasure, newMarkerTime }),
            [updateMarkerTime]
          )}
          onSeek={useCallback(
            (progress) => setProgress(progress),
            [setProgress]
          )}
          onDuration={useCallback(
            (duration) => setDuration(duration),
            [setDuration]
          )}
          playbackRate={speed}
          markers={markersWithMeasures}
          waveSurferRef={waveSurferRef}
        />
      </Paper>
      <MarkerList removeMarker={removeMarker} markers={markersWithMeasures} />
    </>
  );
};

export default Player;

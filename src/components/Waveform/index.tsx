import React, { useCallback, RefObject, useMemo } from "react";
import { useTheme } from "@mui/material";

import { useAppDispatch, useAppSelector } from "state/hooks";
import { playerActions, selectMarkersWithMeasures } from "state/playerSlice";

import Wavesurfer from "./Wavesurfer";

interface WaveformProps {
  waveSurferRef: RefObject<WaveSurfer>;
}

const Waveform: React.FC<WaveformProps> = ({ waveSurferRef }) => {
  const dispatch = useAppDispatch();
  const { playing, speed } = useAppSelector((state) => state.player);
  const fileUrl = useAppSelector((state) => state.app.file.url);
  const markersWithMeasures = useAppSelector(selectMarkersWithMeasures);

  const theme = useTheme();
  const colors = useMemo(
    () => ({
      primaryMain: theme.palette.primary.main,
      primaryDark: theme.palette.primary.dark,
      primaryLight: theme.palette.primary.light,
      secondaryMain: theme.palette.secondary.main,
      textPrimary: theme.palette.text.primary,
      textSecondary: theme.palette.text.secondary,
    }),
    [theme]
  );

  const setPlaying = useCallback(
    (playing: boolean) => dispatch(playerActions.setPlaying(playing)),
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

  const updateMarkerTime = useCallback(
    ({ markerId, newMarkerTime }) =>
      dispatch(playerActions.updateMarkerTime({ markerId, newMarkerTime })),
    [dispatch]
  );

  return (
    <Wavesurfer
      url={fileUrl}
      playing={playing}
      onPlay={useCallback(() => setPlaying(true), [setPlaying])}
      onPause={useCallback(() => setPlaying(false), [setPlaying])}
      onEnded={useCallback(() => setPlaying(false), [setPlaying])}
      onTime={useCallback((time) => setTime(time), [setTime])}
      updateMarkerTime={updateMarkerTime}
      onSeek={useCallback((progress) => setProgress(progress), [setProgress])}
      onDuration={useCallback(
        (duration) => setDuration(duration),
        [setDuration]
      )}
      playbackRate={speed}
      markers={markersWithMeasures}
      waveSurferRef={waveSurferRef}
      colors={colors}
    />
  );
};

export default Waveform;

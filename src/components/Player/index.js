import { useCallback, useMemo, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Box, Paper, Typography } from "@mui/material";

import { getMinutesSeconds } from "utils/getMinutesSeconds";

import ProgressBar from "components/ProgressBar";
import PlaybackMenu from "components/PlaybackMenu";
import MarkerList from "components/MarkerList";
import { useHotkeys } from "react-hotkeys-hook";

import { useAppState, useDispatch } from "lib/reducerContext";
import { actionCreators } from "lib/actions";

export default function Player({ file }) {
  const { player } = useAppState();
  const { playing, progress, duration, speed, markers } = player;

  const setPlaying = useDispatch(actionCreators.setPlaying);
  const setProgress = useDispatch(actionCreators.setProgress);
  const setDuration = useDispatch(actionCreators.setDuration);
  const setSpeed = useDispatch(actionCreators.setSpeed);
  const addMarker = useDispatch(actionCreators.addMarker);
  const removeMarker = useDispatch(actionCreators.removeMarker);

  const playerRef = useRef(null);
  const fileUrl = useMemo(() => URL.createObjectURL(file), [file]);

  useHotkeys("k", () => setPlaying((prev) => !prev), [setPlaying]);
  useHotkeys("space", (e) => (e.preventDefault(), addMarker()), [addMarker]);

  const relativeSeek = useCallback(
    (seconds) => {
      playerRef.current.seekTo(progress * duration + seconds, "seconds");
    },
    [progress, duration]
  );

  useHotkeys("j", () => relativeSeek(-10), [relativeSeek]);
  useHotkeys("l", () => relativeSeek(+10), [relativeSeek]);
  useHotkeys("left", () => relativeSeek(-5), [relativeSeek]);
  useHotkeys("right", () => relativeSeek(+5), [relativeSeek]);

  return (
    <>
      <Paper sx={{ mt: 2, p: 2 }} variant="outlined">
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6">{file.name}</Typography>
          <PlaybackMenu
            playing={playing}
            speed={speed}
            setPlaying={setPlaying}
            setSpeed={setSpeed}
            addMarker={addMarker}
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
          onClick={(clickedAt) => playerRef.current.seekTo(clickedAt)}
        />
      </Paper>
      <MarkerList
        removeMarker={removeMarker}
        markers={markers.map((marker) => ({
          relativeTime: marker,
          ...getMinutesSeconds(marker * duration),
        }))}
      />
    </>
  );
}

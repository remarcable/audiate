import React, { useCallback, useRef } from "react";
import ReactPlayer from "react-player";
import { Box, Paper, Typography } from "@mui/material";

import { getMinutesSeconds } from "utils/getMinutesSeconds";

import ProgressBar from "components/ProgressBar";
import PlaybackMenu from "components/PlaybackMenu";
import MarkerList from "components/MarkerList";
import { useHotkeys } from "react-hotkeys-hook";

import { playerActions } from "state/playerSlice";
import { useAppDispatch, useAppSelector } from "state/hooks";

interface PlayerProps {
  file: {
    name: string;
    objectUrl: string;
    path: string;
  };
}
const Player: React.FC<PlayerProps> = ({ file }) => {
  const dispatch = useAppDispatch();
  const { playing, progress, duration, speed, markers } = useAppSelector(
    (state) => state.player
  );
  const { objectUrl: fileUrl, name: fileName } = file;

  const setPlaying = (playing: boolean) =>
    dispatch(playerActions.setPlaying(playing));
  const togglePlaying = () => dispatch(playerActions.togglePlaying());
  const setProgress = (progress: number) =>
    dispatch(playerActions.setProgress(progress));
  const setDuration = (duration: number) =>
    dispatch(playerActions.setDuration(duration));
  const setSpeed = (speed: number) => dispatch(playerActions.setSpeed(speed));
  const addMarker = () => dispatch(playerActions.addMarker());
  const removeMarker = (marker: number) =>
    dispatch(playerActions.removeMarker(marker));

  const playerRef = useRef<ReactPlayer>(null);

  useHotkeys(
    "k",
    () => {
      togglePlaying();
    },
    [togglePlaying]
  );

  useHotkeys(
    "space",
    (e) => {
      e.preventDefault();
      addMarker();
    },
    [addMarker]
  );

  const relativeSeek = useCallback(
    (seconds: number) => {
      playerRef.current?.seekTo(progress * duration + seconds, "seconds");
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
          <Typography variant="h6">{fileName}</Typography>
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
          onClick={(clickedAt) => playerRef.current?.seekTo(clickedAt)}
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
};

export default Player;

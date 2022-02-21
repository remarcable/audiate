import { useCallback, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import { Box, Paper, Typography } from "@mui/material";

import { getMinutesSeconds } from "utils/getMinutesSeconds";

import ProgressBar from "components/ProgressBar";
import PlaybackMenu from "components/PlaybackMenu";
import MarkerList from "components/MarkerList";
import { useHotkeys } from "react-hotkeys-hook";

import { playerActions } from "state/playerSlice";

export default function Player({ file }) {
  const dispatch = useDispatch();
  const { playing, progress, duration, speed, markers } = useSelector(
    (state) => state.player
  );
  const { objectUrl: fileUrl, name: fileName } = file;

  const setPlaying = (playing) => dispatch(playerActions.setPlaying(playing));
  const togglePlaying = () => dispatch(playerActions.togglePlaying());
  const setProgress = (progress) =>
    dispatch(playerActions.setProgress(progress));
  const setDuration = (duration) =>
    dispatch(playerActions.setDuration(duration));
  const setSpeed = (speed) => dispatch(playerActions.setSpeed(speed));
  const addMarker = () => dispatch(playerActions.addMarker());
  const removeMarker = (marker) => dispatch(playerActions.removeMarker(marker));

  const playerRef = useRef(null);

  useHotkeys("k", () => togglePlaying(), [togglePlaying]);
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

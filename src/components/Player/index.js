import { useCallback, useMemo, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Box, Paper, Typography } from "@mui/material";

import { getMinutesSeconds } from "utils/getMinutesSeconds";

import ProgressBar from "components/ProgressBar";
import PlaybackMenu from "components/PlaybackMenu";
import MarkerList from "components/MarkerList";

export default function Player({ file }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [markers, setMarkers] = useState([]);

  const [speed, setSpeed] = useState(1);
  const playerRef = useRef(null);

  const addMarker = useCallback(
    (relativeTime) => {
      setMarkers((prevMarkers) => [...prevMarkers, relativeTime]);
    },
    [setMarkers]
  );

  const fileUrl = useMemo(() => {
    return URL.createObjectURL(file);
  }, [file]);

  return (
    <>
      <Paper sx={{ mt: 2, p: 2 }} variant="outlined">
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6">{file.name}</Typography>
          <PlaybackMenu
            playing={playing}
            speed={speed}
            progress={progress}
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
        markers={markers
          .map((marker) => ({
            relativeTime: marker,
            ...getMinutesSeconds(marker * duration),
          }))
          .reverse()}
      />
    </>
  );
}

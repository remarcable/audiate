import { useMemo, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Paper, Typography, Button } from "@mui/material";

import ProgressBar from "components/ProgressBar";

export default function Player({ file }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const playerRef = useRef(null);

  const fileUrl = useMemo(() => {
    return URL.createObjectURL(file);
  }, [file]);

  return (
    <Paper sx={{ mt: 2, p: 2 }} variant="outline">
      <Typography variant="h6">{file.name}</Typography>

      <ReactPlayer
        url={fileUrl}
        playing={playing}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onProgress={({ played }) => setProgress(played)}
        progressInterval={100}
        width={500}
        height={55}
        controls
        config={{ file: { forceAudio: true } }}
        ref={playerRef}
      />
      <Button onClick={() => setPlaying(!playing)}>
        {playing ? "Pause" : "Play"}
      </Button>

      <ProgressBar
        progress={progress}
        onClick={(progress) => playerRef.current.seekTo(progress, "fraction")}
      />
    </Paper>
  );
}

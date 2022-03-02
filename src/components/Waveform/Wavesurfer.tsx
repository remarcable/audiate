import React, { useRef, useCallback, RefObject } from "react";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import { type ExtendedMarker } from "lib/getMarkersWithMeasures";
import {
  useWaveSurfer,
  usePlayPause,
  useSetPlaybackRate,
  useMarkers,
  useSurferEvent,
} from "./hooks";

interface WavesurferProps {
  url: string;
  playing: boolean;
  onPlay: () => void;
  onPause: () => void;
  onEnded: () => void;
  onTime: (time: number) => void;
  onSeek: (progress: number) => void;
  onDuration: (duration: number) => void;
  updateMarkerTime: ({
    markerId,
    newMarkerTime,
  }: {
    markerId: string;
    newMarkerTime: number;
  }) => void;
  playbackRate: number;
  markers: ExtendedMarker[];
  waveSurferRef: RefObject<WaveSurfer>;

  colors: {
    primaryMain?: string;
    primaryDark?: string;
    primaryLight?: string;
    secondaryMain?: string;
    textPrimary?: string;
    textSecondary?: string;
  };
}

const Wavesurfer: React.FC<WavesurferProps> = ({
  url,
  playing,
  onPlay,
  onPause,
  onEnded,
  onTime,
  onDuration,
  onSeek,
  updateMarkerTime,
  playbackRate,
  markers,
  waveSurferRef,
  colors,
}) => {
  const waveContainerRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);

  useWaveSurfer({
    waveSurferRef,
    waveContainerRef,
    timelineContainerRef,
    colors,
    onDuration,
    url,
  });

  usePlayPause({ waveSurferRef, playing });
  useSetPlaybackRate({ waveSurferRef, playbackRate });
  useMarkers({ waveSurferRef, markers, colors });

  const onMarkerDrop = useCallback(
    (marker) => {
      const markerId = marker.el.getAttribute("data-marker-id");

      updateMarkerTime({
        markerId,
        newMarkerTime: marker.time,
      });
    },
    [updateMarkerTime]
  );

  useSurferEvent(waveSurferRef, "play", onPlay);
  useSurferEvent(waveSurferRef, "pause", onPause);
  useSurferEvent(waveSurferRef, "finish", onEnded);
  useSurferEvent(waveSurferRef, "audioprocess", onTime);
  useSurferEvent(waveSurferRef, "seek", onSeek);
  useSurferEvent(waveSurferRef, "marker-drop", onMarkerDrop);

  const theme = useTheme();
  const isSmallVariant = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box my={isSmallVariant ? 2 : 5} sx={{ minHeight: 150 }}>
      <Box
        ref={waveContainerRef}
        sx={{
          // TODO: Test this on Windows as well!
          "& wave::-webkit-scrollbar": {
            display: "none",
          },
          "& wave": {
            scrollbarWidth: "none",
          },
        }}
      />
      <Box ref={timelineContainerRef} />
    </Box>
  );
};

export default Wavesurfer;

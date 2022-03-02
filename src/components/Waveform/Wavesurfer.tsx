import React, {
  useRef,
  useCallback,
  type RefObject,
  useEffect,
  useState,
} from "react";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import { usePinch } from "@use-gesture/react";

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

  const [zoomFactor, setZoomFactor] = useState(1);

  useEffect(() => {
    if (!waveSurferRef.current) return;

    const initialPxPerSecond = 20;
    waveSurferRef.current.zoom(initialPxPerSecond * zoomFactor);
  }, [zoomFactor, waveSurferRef]);

  usePinch(
    ({ offset }) => {
      const [actualOffset] = offset;
      setZoomFactor(actualOffset);
    },
    {
      target: waveContainerRef,
      scaleBounds: { min: 0.1, max: 8 },
      rubberband: false,
    }
  );

  useEffect(() => {
    const handler = (e: Event) => e.preventDefault();
    document.addEventListener("gesturestart", handler);
    document.addEventListener("gesturechange", handler);
    document.addEventListener("gestureend", handler);
    return () => {
      document.removeEventListener("gesturestart", handler);
      document.removeEventListener("gesturechange", handler);
      document.removeEventListener("gestureend", handler);
    };
  }, []);

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
  const margin = isSmallVariant ? 2 : 5;

  return (
    <Box mt={margin} mb={margin} sx={{ minHeight: 150 }}>
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

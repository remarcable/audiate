import React, { RefObject, useEffect, useRef, useState } from "react";

import { Box } from "@mui/material";
import { type ExtendedMarker } from "lib/getMarkersWithMeasures";
import { MarkerType } from "state/playerSlice";
import type { WaveSurfer } from "wavesurfer.js";

interface WaveformProps {
  url: string;
  playing: boolean;
  onPlay: () => void;
  onPause: () => void;
  onEnded: () => void;
  onTime: (time: number) => void;
  onSeek: (progress: number) => void;
  onDuration: (duration: number) => void;
  playbackRate: number;
  markers: ExtendedMarker[];
  waveSurferRef: RefObject<WaveSurfer>;
}

const Waveform: React.FC<WaveformProps> = ({
  url,
  playing,
  onPlay,
  onPause,
  onEnded,
  onTime,
  onDuration,
  onSeek,
  playbackRate,
  markers,
  waveSurferRef,
}) => {
  const [loaded, setLoaded] = useState(false);
  const waveContainerRef = useRef(null);
  const timelineContainerRef = useRef(null);

  useWavesurfer({
    waveSurferRef,
    waveContainerRef,
    timelineContainerRef,
    onDuration,
    url,
    playing,
    setLoaded,
  });

  const prevPlayRef = useRef(false);
  useEffect(() => {
    if (!waveSurferRef.current) return;
    if (prevPlayRef.current === playing) return;

    try {
      if (playing) {
        waveSurferRef.current?.play();
      } else {
        waveSurferRef.current?.pause();
      }
    } catch (error) {
      console.log(error);
    }

    prevPlayRef.current = playing;
  }, [playing, loaded]);

  useEffect(() => {
    if (!waveSurferRef.current) return;
    console.log();
    try {
      waveSurferRef.current?.setPlaybackRate?.(playbackRate);
    } catch (error) {
      console.log(error);
    }
  }, [playbackRate, loaded]);

  const prevMarkersRef = useRef(markers);
  useEffect(() => {
    if (!waveSurferRef.current) return;
    if (prevMarkersRef.current === markers) return;

    const addedMarkers = markers.filter(
      (marker) => !prevMarkersRef.current.includes(marker)
    );
    const removedMarkers = prevMarkersRef.current.filter(
      (marker) => !markers.includes(marker)
    );

    try {
      removedMarkers.forEach((marker) => {
        const markerIndex = prevMarkersRef.current.indexOf(marker);
        waveSurferRef.current.markers.remove(markerIndex);
      });

      addedMarkers.forEach(({ time, measure, type }) => {
        waveSurferRef.current.addMarker({
          time,
          label: measure,
          color: type === MarkerType.Jump ? "orange" : "blue",
          position: "top",
        });
      });
    } catch (error) {
      console.log(error);
    }

    prevMarkersRef.current = markers;
  }, [markers, loaded]);

  useEffect(() => {
    if (!waveSurferRef.current) return;

    const play = () => onPlay();
    const pause = () => onPause();
    const finish = () => onEnded();
    const audioprocess = (time: number) => onTime(time);
    const seek = (progress: number) => onSeek(progress);

    waveSurferRef.current?.on("play", play);
    waveSurferRef.current?.on("pause", pause);
    waveSurferRef.current?.on("finish", finish);
    waveSurferRef.current?.on("audioprocess", audioprocess);
    waveSurferRef.current?.on("seek", seek);

    return () => {
      waveSurferRef.current?.un("play", play);
      waveSurferRef.current?.un("pause", pause);
      waveSurferRef.current?.un("finish", finish);
      waveSurferRef.current?.un("audioprocess", audioprocess);
      waveSurferRef.current?.un("seek", seek);
    };
  }, [onPlay, onPause, onEnded, onTime, onSeek, loaded]);

  return (
    <Box mt={5} mb={5}>
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

const useWavesurfer = ({
  waveSurferRef,
  waveContainerRef,
  timelineContainerRef,
  url,
  setLoaded,
  onDuration,
  playing,
}) =>
  useEffect(() => {
    const x = async () => {
      if (waveContainerRef.current && timelineContainerRef.current) {
        const { default: WaveSurfer } = await import("wavesurfer.js");
        const { default: MarkerPlugin } = await import(
          "wavesurfer.js/dist/plugin/wavesurfer.markers"
        );
        const { default: TimelinePlugin } = await import(
          "wavesurfer.js/dist/plugin/wavesurfer.timeline"
        );

        const waveSurfer = WaveSurfer.create({
          container: waveContainerRef.current,
          scrollParent: true,
          backend: "MediaElement",
          plugins: [
            TimelinePlugin.create({
              container: timelineContainerRef.current,
            }),
            MarkerPlugin.create({
              markers: [],
            }),
          ],
        });

        waveSurferRef.current = waveSurfer;

        waveSurfer.load(url);

        waveSurfer.on("ready", function () {
          setLoaded(true);
          onDuration(waveSurfer.getDuration());
          global.waveSurfer = waveSurfer;
        });
      }
    };

    x();

    return () => {
      if (waveSurferRef.current) {
        waveSurferRef.current.destroy();
      }
    };
  }, [onDuration, url, setLoaded]);

export default Waveform;

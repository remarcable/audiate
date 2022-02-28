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
  updateMarkerTime: ({
    oldMeasure,
    newMarkerTime,
  }: {
    oldMeasure: number;
    newMarkerTime: number;
  }) => void;
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
  updateMarkerTime,
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

    try {
      waveSurferRef.current?.setPlaybackRate?.(playbackRate);
    } catch (error) {
      console.log(error);
    }
  }, [playbackRate, loaded]);

  useEffect(() => {
    if (!waveSurferRef.current) return;

    try {
      waveSurferRef.current.markers.clear();
      markers.forEach(({ time, measure, type }) => {
        waveSurferRef.current.addMarker({
          oldTime: time,
          time,
          label: measure,
          color: type === MarkerType.Jump ? "orange" : "blue",
          position: "top",
          draggable: true,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, [markers, loaded]);

  useEffect(() => {
    if (!waveSurferRef.current) return;

    waveSurferRef.current?.on("play", () => onPlay());
    waveSurferRef.current?.on("pause", () => onPause());
    waveSurferRef.current?.on("finish", () => onEnded());
    waveSurferRef.current?.on("audioprocess", (time: number) => onTime(time));
    waveSurferRef.current?.on("seek", (progress: number) => onSeek(progress));
    waveSurferRef.current?.on("marker-drop", (marker) =>
      updateMarkerTime({ oldMeasure: marker.label, newMarkerTime: marker.time })
    );

    return () => {
      waveSurferRef.current?.un("play");
      waveSurferRef.current?.un("pause");
      waveSurferRef.current?.un("finish");
      waveSurferRef.current?.un("audioprocess");
      waveSurferRef.current?.un("seek");
      waveSurferRef.current?.un("marker-drop");
    };
  }, [onPlay, onPause, onEnded, onTime, updateMarkerTime, onSeek, loaded]);

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
              markers: [
                {
                  // BUG: when this isn't set, any marker added with `addMarker`
                  // will not be draggable
                  draggable: true,
                },
              ],
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

import { ExtendedMarker } from "lib/getMarkersWithMeasures";
import { MutableRefObject, RefObject, useEffect, useRef } from "react";
import { Marker, MarkerType } from "state/playerSlice";
import type WaveSurfer from "wavesurfer.js";

type WaveSurferRef = MutableRefObject<WaveSurfer | null>;

interface UseWaveSurferHook {
  waveSurferRef: WaveSurferRef;
  waveContainerRef: RefObject<HTMLDivElement>;
  timelineContainerRef: RefObject<HTMLDivElement>;
  onDuration: (duration: number) => void;
  url: string;
}

export const useWaveSurfer = ({
  waveSurferRef,
  waveContainerRef,
  timelineContainerRef,
  onDuration,
  url,
}: UseWaveSurferHook) =>
  useEffect(() => {
    const loadWavesurfer = async () => {
      if (!waveContainerRef.current || !timelineContainerRef.current) return;

      const { default: WaveSurfer } = await import("wavesurfer.js");
      const { default: MarkerPlugin } = await import(
        // @ts-expect-error: Can't find types for the plugin
        "wavesurfer.js/dist/plugin/wavesurfer.markers"
      );
      const { default: TimelinePlugin } = await import(
        // @ts-expect-error: Can't find types for the plugin
        "wavesurfer.js/dist/plugin/wavesurfer.timeline"
      );

      const waveSurfer = WaveSurfer.create({
        container: waveContainerRef.current,
        scrollParent: true,
        backend: "MediaElement",
        plugins: [
          // BUG: when this isn't set, any marker added with `addMarker`
          // will not be draggable
          MarkerPlugin.create({ markers: [{ draggable: true }] }),
          TimelinePlugin.create({ container: timelineContainerRef.current }),
        ],
      });

      // Remove the empty marker:
      waveSurfer.markers.clear();

      waveSurfer.load(url);
      waveSurfer.on("ready", function () {
        onDuration(waveSurfer.getDuration());
        // @ts-expect-error: `global` doesn't have index signature
        global.waveSurfer = waveSurfer;
      });

      waveSurferRef.current = waveSurfer;
    };

    loadWavesurfer();

    return () => {
      if (waveSurferRef.current) {
        waveSurferRef.current.destroy();
        waveSurferRef.current = null;
      }
    };
  }, [waveSurferRef, timelineContainerRef, waveContainerRef, onDuration, url]);

export const usePlayPause = ({
  waveSurferRef,
  playing,
}: {
  waveSurferRef: WaveSurferRef;
  playing: boolean;
}) => {
  const prevPlayRef = useRef(playing);
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
  }, [waveSurferRef, playing]);
};

export const useSetPlaybackRate = ({
  waveSurferRef,
  playbackRate,
}: {
  waveSurferRef: WaveSurferRef;
  playbackRate: number;
}) => {
  useEffect(() => {
    if (!waveSurferRef.current) return;

    try {
      waveSurferRef.current?.setPlaybackRate?.(playbackRate);
    } catch (error) {
      console.log(error);
    }
  }, [waveSurferRef, playbackRate]);
};

export const useMarkers = ({
  waveSurferRef,
  markers,
}: {
  waveSurferRef: WaveSurferRef;
  markers: ExtendedMarker[];
}) => {
  useEffect(() => {
    if (!waveSurferRef.current) return;

    try {
      waveSurferRef.current.markers.clear();
      markers.forEach(({ time, measure, type }) => {
        waveSurferRef.current?.addMarker({
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
  }, [waveSurferRef, markers]);
};

export const useSurferEvent = (
  waveSurferRef: WaveSurferRef,
  event: string,
  handler: ((arg: number) => void) | ((arg: Marker) => void) | (() => void)
) => {
  useEffect(() => {
    if (!waveSurferRef.current) return;
    const waveSurfer = waveSurferRef.current;

    console.log("Register event handler", event);
    waveSurfer.on(event, handler);

    return () => {
      if (!waveSurfer) return;

      console.log("Unregister event handler", event);
      waveSurfer?.un(event, handler);
    };
    // XXX: waveSurferRef.current is needed to register the event handlers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waveSurferRef, waveSurferRef.current, event, handler]);
};

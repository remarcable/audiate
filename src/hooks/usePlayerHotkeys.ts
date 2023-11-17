import { useHotkeys } from "react-hotkeys-hook";

export const usePlayerHotkeys = ({
  dialogIsOpen,
  togglePlaying,
  addMeasureMarker,
  openJumpMarkerDialog,
  removeCurrentMarker,
  relativeSeek,
  absoluteSeek,
}: {
  dialogIsOpen: boolean;
  togglePlaying: () => void;
  addMeasureMarker: () => void;
  openJumpMarkerDialog: () => void;
  removeCurrentMarker: () => void;
  relativeSeek: (seconds: number) => void;
  absoluteSeek: (seconds: number) => void;
}) => {
  useHotkeys(
    "k",
    () => {
      if (!dialogIsOpen) {
        togglePlaying();
      }
    },
    [dialogIsOpen, togglePlaying]
  );

  useHotkeys(
    "space",
    (e) => {
      if (!dialogIsOpen) {
        e.preventDefault();
        addMeasureMarker();
      }
    },
    [dialogIsOpen, addMeasureMarker]
  );

  useHotkeys(
    "shift+space",
    (e) => {
      e.preventDefault();
      openJumpMarkerDialog();
    },
    [openJumpMarkerDialog]
  );

  useHotkeys("backspace", () => removeCurrentMarker(), [removeCurrentMarker]);

  useHotkeys("j", () => relativeSeek(-10), [relativeSeek]);
  useHotkeys("l", () => relativeSeek(+10), [relativeSeek]);
  useHotkeys("left", () => relativeSeek(-5), [relativeSeek]);
  useHotkeys("right", () => relativeSeek(+5), [relativeSeek]);
  useHotkeys("enter", () => absoluteSeek(0), [absoluteSeek]);
};

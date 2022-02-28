import { useHotkeys } from "react-hotkeys-hook";

export const usePlayerHotkeys = ({
  dialogIsOpen,
  togglePlaying,
  addMeasureMarker,
  openJumpToMeasureDialog,
  relativeSeek,
}: {
  dialogIsOpen: boolean;
  togglePlaying: () => void;
  addMeasureMarker: () => void;
  openJumpToMeasureDialog: () => void;
  relativeSeek: (seconds: number) => void;
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
      openJumpToMeasureDialog();
    },
    [openJumpToMeasureDialog]
  );

  useHotkeys("j", () => relativeSeek(-10), [relativeSeek]);
  useHotkeys("l", () => relativeSeek(+10), [relativeSeek]);
  useHotkeys("left", () => relativeSeek(-5), [relativeSeek]);
  useHotkeys("right", () => relativeSeek(+5), [relativeSeek]);
};

import { useHotkeys } from "react-hotkeys-hook";

export const usePlayerHotkeys = ({
  jumpToMeasureDialogIsOpen,
  togglePlaying,
  addMeasureMarker,
  openJumpToMeasureDialog,
  relativeSeek,
}: {
  jumpToMeasureDialogIsOpen: boolean;
  togglePlaying: () => void;
  addMeasureMarker: () => void;
  openJumpToMeasureDialog: () => void;
  relativeSeek: (seconds: number) => void;
}) => {
  useHotkeys(
    "k",
    () => {
      if (!jumpToMeasureDialogIsOpen) {
        togglePlaying();
      }
    },
    [jumpToMeasureDialogIsOpen, togglePlaying]
  );

  useHotkeys(
    "space",
    (e) => {
      if (!jumpToMeasureDialogIsOpen) {
        e.preventDefault();
        addMeasureMarker();
      }
    },
    [jumpToMeasureDialogIsOpen, addMeasureMarker]
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

import { FormEvent } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface PlaybackMenuProps {
  open: boolean;
  handleClose: (jumpToMeasure: number | null) => void;
}
const JumpDialog: React.FC<PlaybackMenuProps> = ({ open, handleClose }) => (
  <Dialog open={open} onClose={() => handleClose(null)}>
    <form
      onSubmit={(e: FormEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
          measure: { value: number };
        };
        handleClose(target.measure.value ?? null);
      }}
    >
      <DialogTitle>Add Jump Marker</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter the measure this marker should jump to:
        </DialogContentText>
        <TextField
          autoFocus
          margin="normal"
          id="measure"
          label="Measure Number"
          type="Number"
          fullWidth
          required
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(null)}>Cancel</Button>
        <Button type="submit">Add Marker</Button>
      </DialogActions>
    </form>
  </Dialog>
);

export default JumpDialog;

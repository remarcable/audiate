import { FormEvent } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

interface CreateJumpMarkerDialogProps {
  open: boolean;
  handleClose: (jumpToMeasure: number | null) => void;
}
const CreateJumpMarkerDialog: React.FC<CreateJumpMarkerDialogProps> = ({
  open,
  handleClose,
}) => (
  <Dialog open={open} onClose={() => handleClose(null)}>
    <form
      onSubmit={(e: FormEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
          measure: { value: number };
        };
        handleClose(+target.measure.value ?? null);
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

export default CreateJumpMarkerDialog;

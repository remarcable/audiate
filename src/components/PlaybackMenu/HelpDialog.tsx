import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface HelpDialogProps {
  open: boolean;
  handleClose: () => void;
}

const SHORTCUTS = [
  { key: "k", action: "Play / Pause" },
  { key: "j", action: "Fast forward 10 seconds" },
  { key: "l", action: "Rewind 10 seconds" },
  { key: "← (Left Arrow)", action: "Fast forward 5 seconds" },
  { key: "→ (Right Arrow)", action: "Rewind 5 seconds" },
  { key: "Space", action: "Set Marker" },
  { key: "Shift + Space", action: "Set Jump Marker" },
] as const;

const HelpDialog: React.FC<HelpDialogProps> = ({ open, handleClose }) => (
  <Dialog open={open} onClose={handleClose} fullWidth>
    <DialogTitle>Keyboard Shortcuts</DialogTitle>
    <DialogContent>
      <Table>
        <TableHead sx={{ width: "100%" }}>
          <TableRow>
            <TableCell>Action</TableCell>
            <TableCell>Key</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {SHORTCUTS.map(({ key, action }) => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Dismiss</Button>
    </DialogActions>
  </Dialog>
);

export default HelpDialog;

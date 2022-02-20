import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const MarkerList = ({ markers }) => (
  <Box mt={3}>
    <TableContainer
      component={Paper}
      variant="outlined"
      sx={{ maxHeight: "70vh", overflow: "scroll" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Markerposition</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {markers.map(({ relativeTime, minutes, seconds }) => (
            <TableRow
              key={relativeTime}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {minutes}:{seconds} ({relativeTime.toFixed(3)})
              </TableCell>
              <TableCell component="th" scope="row">
                <Button>Remove</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default MarkerList;

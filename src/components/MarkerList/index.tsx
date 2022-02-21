import React from "react";

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

interface MarkerListProps {
  markers: Array<{
    relativeTime: number;
    minutes: string;
    seconds: string;
  }>;
  removeMarker: (markerId: number) => void;
}

const MarkerList: React.FC<MarkerListProps> = ({ markers, removeMarker }) => (
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
                <Button onClick={() => removeMarker(relativeTime)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default MarkerList;

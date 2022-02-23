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

import type { Marker } from "state/playerSlice";
import { getMinutes, getSeconds } from "utils/getMinutesSeconds";

interface MarkerListProps {
  markers: Marker[];
  removeMarker: (markerId: number) => void;
}

const MarkerList: React.FC<MarkerListProps> = ({ markers, removeMarker }) => {
  return (
    <Box mt={3}>
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ maxHeight: "60vh", overflow: "scroll" }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead
            sx={{
              position: "sticky",
              top: 0,
              backgroundColor: "background.paper",
              width: "100%",
              zIndex: 10,
            }}
          >
            <TableRow>
              <TableCell>Markerposition</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {markers.map(({ time }) => (
              <TableRow
                key={time}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {getMinutes(time)}:{getSeconds(time)} ({time.toFixed(3)}s)
                </TableCell>
                <TableCell component="th" scope="row">
                  <Button onClick={() => removeMarker(time)}>Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MarkerList;

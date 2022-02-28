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

import { MarkerType } from "state/playerSlice";
import { getMinutes, getSeconds } from "lib/getMinutesSeconds";
import { type ExtendedMarker } from "lib/getMarkersWithMeasures";

interface MarkerListProps {
  markers: ExtendedMarker[];
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
        <Table sx={{ minWidth: 650 }} stickyHeader>
          <TableHead sx={{ width: "100%" }}>
            <TableRow>
              <TableCell>Measure</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {markers.reverse().map(({ time, measure, type }) => (
              <TableRow
                key={time}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                selected={type === MarkerType.Jump}
              >
                <TableCell component="th" scope="row">
                  {measure}
                </TableCell>
                <TableCell component="th" scope="row">
                  {type}
                </TableCell>
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

export default React.memo(MarkerList);
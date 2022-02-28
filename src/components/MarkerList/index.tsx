import React, { useCallback } from "react";

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

import { getMinutes, getSeconds } from "lib/getMinutesSeconds";

import {
  MarkerType,
  playerActions,
  selectMarkersWithMeasures,
} from "state/playerSlice";
import { useAppDispatch, useAppSelector } from "state/hooks";

const MarkerList: React.FC = () => {
  const dispatch = useAppDispatch();
  const markersWithMeasures = useAppSelector(selectMarkersWithMeasures);

  const removeMarker = useCallback(
    (markerTime: number) => dispatch(playerActions.removeMarker(markerTime)),
    [dispatch]
  );

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
            {markersWithMeasures.map(({ time, type, measure }) => (
              <MemoizedRow
                key={time}
                time={time}
                type={type}
                measure={measure}
                removeMarker={removeMarker}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const Row = ({
  time,
  type,
  measure,
  removeMarker,
}: {
  time: number;
  type: MarkerType;
  measure: number;
  removeMarker: (marker: number) => void;
}) => {
  return (
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
  );
};

const MemoizedRow = React.memo(Row);

export default React.memo(MarkerList);

import React, { useCallback } from "react";

import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import {
  DeleteOutlined,
  FlagOutlined,
  TourOutlined,
} from "@mui/icons-material";

import { formatSeconds } from "lib/formatSeconds";

import {
  MarkerType,
  playerActions,
  selectMarkersWithMeasures,
} from "state/playerSlice";
import { useAppDispatch, useAppSelector } from "state/hooks";

interface MarkerListProps {
  seekTo: (seconds: number) => void;
}

const MarkerList: React.FC<MarkerListProps> = ({ seekTo }) => {
  const dispatch = useAppDispatch();
  const markersWithMeasures = useAppSelector(selectMarkersWithMeasures);

  const removeMarker = useCallback(
    (markerTime: number) => dispatch(playerActions.removeMarker(markerTime)),
    [dispatch]
  );

  return (
    <Box mt={3} pb={10} sx={{ display: "flex", justifyContent: "center" }}>
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ maxWidth: 500 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ maxWidth: 20 }} />
              <TableCell>Time</TableCell>
              <TableCell>Measure</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {markersWithMeasures.map(({ time, type, measure }) => (
              <MemoizedRow
                key={time}
                time={time}
                type={type}
                measure={measure}
                seekTo={seekTo}
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
  seekTo,
  removeMarker,
}: {
  time: number;
  type: MarkerType;
  measure: number;
  seekTo: (seconds: number) => void;
  removeMarker: (marker: number) => void;
}) => {
  return (
    <TableRow
      key={time}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        cursor: "pointer",
      }}
      hover
      onClick={() => seekTo(time)}
    >
      <TableCell component="th" scope="row" sx={{ maxWidth: 20 }}>
        {type === MarkerType.Jump && (
          <Tooltip title="Jump Marker">
            <TourOutlined color="secondary" />
          </Tooltip>
        )}
        {type === MarkerType.Measure && (
          <Tooltip title="Measure Marker">
            <FlagOutlined color="primary" />
          </Tooltip>
        )}
      </TableCell>
      <TableCell component="th" scope="row">
        {formatSeconds(time)}
      </TableCell>
      <TableCell component="th" scope="row">
        {measure}
      </TableCell>
      <TableCell component="th" scope="row">
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            removeMarker(time);
          }}
        >
          <DeleteOutlined />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const MemoizedRow = React.memo(Row);

export default React.memo(MarkerList);

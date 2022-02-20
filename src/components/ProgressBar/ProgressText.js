import { Typography } from "@mui/material";
import { getMinutesSeconds } from "utils/getMinutesSeconds";

const ProgressText = ({ duration, progress }) => {
  const { minutes: durationMinutes, seconds: durationSeconds } =
    getMinutesSeconds(duration);
  const { minutes: currentMinutes, seconds: currentSeconds } =
    getMinutesSeconds(duration * progress);

  return (
    <Typography variant="caption" sx={{ alignSelf: "flex-end" }} gutterBottom>
      {currentMinutes}:{currentSeconds} / {durationMinutes}:{durationSeconds}
    </Typography>
  );
};

export default ProgressText;

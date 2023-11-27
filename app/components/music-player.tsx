import { Box, Typography } from "@mui/material";
import SelectedSong from "./selected-song";

export default function MusicPlayer() {
  return (
    <Box className="m-3">
      <Typography className="flex flex-row" variant="h6">
        <b>
          <u>
            Now Playing
          </u>
          :
        </b>
        <SelectedSong></SelectedSong>
      </Typography>
    </Box>
  )
}
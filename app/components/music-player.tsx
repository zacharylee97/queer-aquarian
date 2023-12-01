import { Box, Typography } from "@mui/material";
import SelectedSong from "./selected-song";
import Link from "next/link";

export default function MusicPlayer() {
  return (
    <Box className="m-3">
      <Typography className="flex flex-row" variant="h6">
        <b>
          <u>
            <Link href="/playlist">Now Playing:</Link>
          </u>
        </b>
        <SelectedSong></SelectedSong>
      </Typography>
    </Box>
  );
}

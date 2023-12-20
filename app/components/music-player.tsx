import { Box, Typography } from "@mui/material";
import SelectedSong from "./selected-song";
import Link from "next/link";

export default function MusicPlayer() {
  return (
    <Box className="p-3 bg-black">
      <Typography className="flex flex-row whitespace-nowrap" variant="h6">
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

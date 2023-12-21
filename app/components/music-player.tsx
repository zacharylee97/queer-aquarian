import { Box, Typography } from "@mui/material";
import SelectedSong from "./selected-song";
import Link from "next/link";

export default function MusicPlayer() {
  return (
    <Box className="flex flex-row p-3 bg-black">
      <Link href="/playlist">
        <Typography className="whitespace-nowrap" variant="h6">
          <b>
            <u>
              Now Playing
            </u>
          </b>
          :
        </Typography>
      </Link>
      <SelectedSong></SelectedSong>
    </Box>
  );
}

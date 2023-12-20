import { Box, Typography } from "@mui/material";
import SelectedSong from "./selected-song";
import Link from "next/link";

export default function MusicPlayer() {
  return (
    <Box className="flex flex-row p-3 bg-black"
      sx={{ marginY: { xs: "1rem", sm: "0.5rem" } }}>
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

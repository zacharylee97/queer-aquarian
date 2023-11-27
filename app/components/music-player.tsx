import { Box, Typography } from "@mui/material";
import { Playlist } from "../constants/playlist";

export default function MusicPlayer() {
  const selectedSong = Playlist[Math.floor(Math.random() * Playlist.length)];
  return (
    <Box className="m-3">
      <Typography variant="h6">
        <b>
          <u>
            Now Playing
          </u>
          :{" "}
        </b>
        <i>
          {selectedSong.title} by {selectedSong.artist}
        </i>
      </Typography>
    </Box>
  )
}
import { Box, Typography } from "@mui/material";
import Header from "../components/header";
import PlaylistTable from "../components/playlist-table";

export default function FavouritesPlaylist() {
  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <Box className="m-10 mb-3">
          <Typography variant="h3">
            Playlist
          </Typography>
          <PlaylistTable></PlaylistTable>
        </Box>
      </Box>
    </main>
  );
}

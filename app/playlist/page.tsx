import { Box, Typography } from "@mui/material";
import Header from "../components/header";
import PlaylistTable from "../components/playlist/playlist-table";
import MobilePlaylistTable from "../components/playlist/mobile-playlist-table";

export default function MySecretPlaylist() {
  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col">
        <Box className="m-10 mb-3">
          <Typography variant="h3">My Secret Playlist</Typography>
          {`Congrats, you found my secret playlist! Well, it's actually more
            like my Favourites playlist cause these are the songs I currently listen
            to on repeat. I hope you enjoy and maybe you'll even find a new
            favourite to add to your playlist!`}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <PlaylistTable></PlaylistTable>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <MobilePlaylistTable></MobilePlaylistTable>
          </Box>
        </Box>
      </Box>
    </main>
  );
}

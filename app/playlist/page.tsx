import { Box, Typography } from "@mui/material";
import Header from "../components/header";

export default function Playlist() {
  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <Box className="m-10 mb-3">
          <Typography variant="h3">
            Playlist
          </Typography>
        </Box>
      </Box>
    </main>
  );
}

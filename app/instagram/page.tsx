import { Box, Typography } from "@mui/material";
import Header from "../components/header";
import InstagramFeed from "../components/instagram-feed";

export default function Home() {
  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28 mx-10">
        <Typography variant="h1">
          Instagram
        </Typography>
        <Typography variant="h5">
          <a href="https://www.instagram.com/queer_aquarian">
            <u>
              https://www.instagram.com/queer_aquarian
            </u>
          </a>
        </Typography>
        <InstagramFeed></InstagramFeed>
      </Box>
    </main>
  );
}

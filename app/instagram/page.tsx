import { Box, Typography } from "@mui/material";
import Header from "../components/header";
import InstagramFeed from "../components/instagram-feed";

export default function Home() {
  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <Box className="m-10 mb-3">
          <Typography variant="h3">
            Instagram
          </Typography>
          <Typography className="mt-3" variant="h5">
            <a href="https://www.instagram.com/queer_aquarian">
              <u>
                https://www.instagram.com/queer_aquarian
              </u>
            </a>
          </Typography>
        </Box>
        <InstagramFeed></InstagramFeed>
      </Box>
    </main>
  );
}

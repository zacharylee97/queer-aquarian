import Header from "./components/header";
import { Box, Typography } from "@mui/material";
import InstagramFeed from "./components/instagram-feed";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <Box className="m-10">
          <Typography variant="h1">
            Welcome to Queer Aquarian
          </Typography>
          <Typography variant="h6">
            Instagram:{" "}
            <a href="https://www.instagram.com/queer_aquarian">
              <u>
                https://www.instagram.com/queer_aquarian
              </u>
            </a>
          </Typography>
          <InstagramFeed></InstagramFeed>
        </Box>
      </Box>
    </main>
  );
}

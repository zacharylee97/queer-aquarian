import Header from "./components/header";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import MusicPlayer from "./components/music-player";

export default function Home() {
  const sloganStyle = {
    width: "calc(100% - 2.5rem)",
    margin: "1.25rem"
  };

  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <MusicPlayer></MusicPlayer>
        <Image
          src="/slogan.png"
          alt="Slogan"
          width={1000}
          height={1000}
          style={sloganStyle}
        />
        <Image
          className="invert self-center"
          src="/fancy-squiggle.png"
          alt="Fancy Squiggle"
          width={500}
          height={500}
        />
        <Typography className="mt-10 mx-20" variant="h4">
          Queer Aquarian is my personal blog where I can post whatever I want.
          It started out as an art and photography{" "}
          <a href="https://www.instagram.com/queer_aquarian">
            <u>
              Instagram
            </u>
          </a>
          {" "}account, but I wanted a place to share my other passions as well, including
          food, music and poetry. I hope you enjoy and remember, life is short, so
          make the most of it!
        </Typography>
      </Box>
    </main>
  );
}

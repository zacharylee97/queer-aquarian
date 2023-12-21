import Header from "./components/header";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import MusicPlayer from "./components/music-player";

export default function Home() {
  const sloganStyle = {
    width: "calc(100% - 5rem)",
    margin: "2.5rem",
  };

  return (
    <main className="min-h-screen w-screen overflow-hidden">
      <Header></Header>
      <Box className="flex flex-col">
        <MusicPlayer></MusicPlayer>
        <Image
          src="/background-images/Luna.png"
          alt="Background Image"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover", zIndex: "-1", opacity: "50%" }}
        />
        <Image
          src="/slogan.png"
          alt="Slogan"
          width={1000}
          height={1000}
          style={sloganStyle}
        />
        <Typography className="p-10 bg-black">
          <p>
            {`Queer Aquarian is my personal blog where I can post whatever I want.
          It started out as an art and photography `}
            <a href="https://www.instagram.com/queer_aquarian">
              <u>Instagram</u>
            </a>
            {` account, but I wanted a place to share my other passions as well, like my love for 
          music, food and travel. I'm also planning on sharing more personal details of my life.`}
          </p>
          <br />
          <p>
            {`I hope you enjoy and remember, life is short, so make the most of it!`}
          </p>
        </Typography>
      </Box>
    </main>
  );
}

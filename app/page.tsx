import Header from "./components/header";
import Image from "next/image";
import { Box } from "@mui/material";
import MusicPlayer from "./components/music-player";

export default function Home() {
  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col relative overflow-hidden">
        <MusicPlayer></MusicPlayer>
        <Image
          src="/home-page.png"
          alt="Home Page"
          priority
          quality={100}
          width={5000}
          height={5000}
        />
      </Box>
    </main>
  );
}

import Header from "./components/header";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <Box>
          <Image
            className="m-5"
            src="/coming-soon.png"
            alt="Coming Soon"
            width={1000}
            height={1000}
          />
        </Box>
        <Typography className="m-10" variant="h1">
          In the meantime...
        </Typography>
        <Typography className="mx-10 mb-3" variant="h6">
          Instagram:{" "}
          <a href="https://www.instagram.com/queer_aquarian">
            https://www.instagram.com/queer_aquarian
          </a>
        </Typography>
        <Box>
          <Image
            className="m-5"
            src="/CLOBS.png"
            alt="CLOBS"
            width={500}
            height={500}
          />
        </Box>
      </Box>
    </main>
  );
}

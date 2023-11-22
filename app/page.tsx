import Header from "./components/header";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <Typography className="m-10" variant="h1">
          In the meantime...
        </Typography>
        <Typography className="mx-10 mb-3" variant="h6">
          Instagram:
          <a href="https://www.instagram.com/queer_aquarian"> https://www.instagram.com/queer_aquarian
          </a>
        </Typography>
        <Typography className="mx-10 mb-3" variant="h6">
          CLOBS Preview:
        </Typography>
      </Box>
    </main>
  );
}
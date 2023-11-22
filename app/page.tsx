import Header from "./components/header";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <Typography className="m-10" variant="h3">
          About Us
        </Typography>
        <Typography className="mx-10 mb-3" variant="h6">
          Lorem ipsum
        </Typography>
      </Box>
    </main>
  );
}
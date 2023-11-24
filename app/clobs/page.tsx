import { Box, Typography } from "@mui/material";
import Header from "../components/header";
import Image from "next/image";

export default function Clobs() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <Typography className="m-10 mb-3" variant="h3">
          CLOBS Preview
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

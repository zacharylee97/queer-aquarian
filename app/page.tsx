import Header from "./components/header";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <Box className="m-10">
          <Typography variant="h1">
            Welcome to Queer Aquarian
          </Typography>
        </Box>
      </Box>
    </main>
  );
}

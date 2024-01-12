import { Box, Typography } from "@mui/material";
import Header from "../components/header";
import Image from "next/image";

export default function Poems() {
  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col">
        <Box className="m-10">
          <Typography variant="h3">{`Poems`}</Typography>
          <Image
            src="/poems/for-you.webp"
            alt="for-you"
            width={500}
            height={500}
          />
          <Image
            src="/poems/depression.webp"
            alt="depression"
            width={500}
            height={500}
          />
          <Image
            src="/poems/thanksgiving.webp"
            alt="thanksgiving"
            width={500}
            height={500}
          />
          <Image
            src="/poems/middle-child.webp"
            alt="middle-child"
            width={500}
            height={500}
          />
          <Image
            src="/poems/vacation-time.webp"
            alt="vacation-time"
            width={500}
            height={500}
          />
          <Image
            src="/poems/ambition.webp"
            alt="ambition"
            width={500}
            height={500}
          />
          <Image
            src="/poems/dreams.webp"
            alt="dreams"
            width={500}
            height={500}
          />
          <Image src="/poems/grown.webp" alt="grown" width={500} height={500} />
        </Box>
      </Box>
    </main>
  );
}

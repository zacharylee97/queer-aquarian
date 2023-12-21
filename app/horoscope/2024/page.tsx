import { Box, Typography } from "@mui/material";
import Header from "../../components/header";
import Image from "next/image";

export default function Horoscope2024() {
  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col">
        <Box className="m-10">
          <Typography variant="h3">{`2024 Horoscope`}</Typography>
          <Typography>
            {`Courtesy of `}
            <a href="https://www.costarastrology.com">
              <u>Co-Star</u>
            </a>
          </Typography>
          <br />
          <Image
            src="/2024-horoscope/1.webp"
            alt="1"
            width={350}
            height={350}
          />
          <Image
            src="/2024-horoscope/2.webp"
            alt="2"
            width={350}
            height={350}
          />
          <Image
            src="/2024-horoscope/3.webp"
            alt="3"
            width={350}
            height={350}
          />
          <Image
            src="/2024-horoscope/4.webp"
            alt="4"
            width={350}
            height={350}
          />
          <Image
            src="/2024-horoscope/5.webp"
            alt="5"
            width={350}
            height={350}
          />
          <Image
            src="/2024-horoscope/6.webp"
            alt="6"
            width={350}
            height={350}
          />
        </Box>
      </Box>
    </main>
  );
}

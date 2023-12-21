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
          <Image src="/2024-horoscope/1.png" alt="1" width={350} height={350} />
          <Image src="/2024-horoscope/2.png" alt="2" width={350} height={350} />
          <Image src="/2024-horoscope/3.png" alt="3" width={350} height={350} />
          <Image src="/2024-horoscope/4.png" alt="4" width={350} height={350} />
          <Image src="/2024-horoscope/5.png" alt="5" width={350} height={350} />
          <Image src="/2024-horoscope/6.png" alt="6" width={350} height={350} />
        </Box>
      </Box>
    </main>
  );
}

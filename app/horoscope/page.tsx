import { Box, Typography } from "@mui/material";
import Header from "../components/header";
import Image from "next/image";
import Link from "next/link";

export default function Horoscope() {
  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col">
        <Box className="m-10">
          <Typography variant="h3">
            {`Horoscope`}
            <br />
          </Typography>
          <Typography variant="h6">
            {`Click `}
            <Link href={"/horoscope/2024"}>
              <u>here</u>
            </Link>
            {` for my 2024 horoscope!`}
            <br />
          </Typography>
          <Typography>
            {`As you can guess from my blog's namesake, I am an Aquarian. 
            Here's my horoscope information provided by the `}
            <a href="https://www.costarastrology.com">
              <u>Co-Star</u>
            </a>
            {` app based on the date and time of my birth. I will also be 
            uploading my daily horoscope on my `}
            <a href="https://www.instagram.com/queer_aquarian">
              <u>Insta Story</u>
            </a>
            {`. If you create a Co-Star account, let me know and I can add you!`}
            <br />
          </Typography>
          <br />
          <Image
            src="/horoscope/1-sun.webp"
            alt="1-sun"
            width={500}
            height={500}
          />
          <Image
            src="/horoscope/2-moon.webp"
            alt="2-moon"
            width={500}
            height={500}
          />
          <Image
            src="/horoscope/3-ascendant.webp"
            alt="3-ascendant"
            width={500}
            height={500}
          />
          <Image
            src="/horoscope/4-mercury.webp"
            alt="4-mercury"
            width={500}
            height={500}
          />
          <Image
            src="/horoscope/5-venus.webp"
            alt="5-venus"
            width={500}
            height={500}
          />
          <Image
            src="/horoscope/6-mars.webp"
            alt="6-mars"
            width={500}
            height={500}
          />
          <Image
            src="/horoscope/7-jupiter.webp"
            alt="7-jupiter"
            width={500}
            height={500}
          />
          <Image
            src="/horoscope/8-saturn.webp"
            alt="8-saturn"
            width={500}
            height={500}
          />
          <Image
            src="/horoscope/9-uranus.webp"
            alt="9-uranus"
            width={500}
            height={500}
          />
          <Image
            src="/horoscope/10-neptune.webp"
            alt="10-neptune"
            width={500}
            height={500}
          />
          <Image
            src="/horoscope/11-pluto.webp"
            alt="11-pluto"
            width={500}
            height={500}
          />
        </Box>
      </Box>
    </main>
  );
}

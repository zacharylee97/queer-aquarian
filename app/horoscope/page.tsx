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
            <p>{`Horoscope`}</p>
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
            src="/horoscope/1-sun.png"
            alt="1-sun"
            width={350}
            height={350}
          />
          <Image
            src="/horoscope/2-moon.png"
            alt="2-moon"
            width={350}
            height={350}
          />
          <Image
            src="/horoscope/3-ascendant.png"
            alt="3-ascendant"
            width={350}
            height={350}
          />
          <Image
            src="/horoscope/4-mercury.png"
            alt="4-mercury"
            width={350}
            height={350}
          />
          <Image
            src="/horoscope/5-venus.png"
            alt="5-venus"
            width={350}
            height={350}
          />
          <Image
            src="/horoscope/6-mars.png"
            alt="6-mars"
            width={350}
            height={350}
          />
          <Image
            src="/horoscope/7-jupiter.png"
            alt="7-jupiter"
            width={350}
            height={350}
          />
          <Image
            src="/horoscope/8-saturn.png"
            alt="8-saturn"
            width={350}
            height={350}
          />
          <Image
            src="/horoscope/9-uranus.png"
            alt="9-uranus"
            width={350}
            height={350}
          />
          <Image
            src="/horoscope/10-neptune.png"
            alt="10-neptune"
            width={350}
            height={350}
          />
          <Image
            src="/horoscope/11-pluto.png"
            alt="11-pluto"
            width={350}
            height={350}
          />
        </Box>
      </Box>
    </main>
  );
}

import { Box, Typography } from "@mui/material";
import Header from "../components/header";
import Image from "next/image";

export default function Horoscope() {
  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <Box className="m-10">
          <Typography variant="h3">
            <p>{`Horoscope`}</p>
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
          </Typography>
          <br />
          <Image
            src="/Horoscope/1-sun.png"
            alt="1-sun"
            width={350}
            height={350}
          />
          <Image
            src="/Horoscope/2-moon.png"
            alt="2-moon"
            width={350}
            height={350}
          />
          <Image
            src="/Horoscope/3-ascendant.png"
            alt="3-ascendant"
            width={350}
            height={350}
          />
          <Image
            src="/Horoscope/4-mercury.png"
            alt="4-mercury"
            width={350}
            height={350}
          />
          <Image
            src="/Horoscope/5-venus.png"
            alt="5-venus"
            width={350}
            height={350}
          />
          <Image
            src="/Horoscope/6-mars.png"
            alt="6-mars"
            width={350}
            height={350}
          />
          <Image
            src="/Horoscope/7-jupiter.png"
            alt="7-jupiter"
            width={350}
            height={350}
          />
          <Image
            src="/Horoscope/8-saturn.png"
            alt="8-saturn"
            width={350}
            height={350}
          />
          <Image
            src="/Horoscope/9-uranus.png"
            alt="9-uranus"
            width={350}
            height={350}
          />
          <Image
            src="/Horoscope/10-neptune.png"
            alt="10-neptune"
            width={350}
            height={350}
          />
          <Image
            src="/Horoscope/11-pluto.png"
            alt="11-pluto"
            width={350}
            height={350}
          />
        </Box>
      </Box>
    </main>
  );
}

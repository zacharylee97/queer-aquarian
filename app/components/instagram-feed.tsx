import { Box } from "@mui/material";
import Image from "next/image";


export default function InstagramFeed() {
  return (
    <Box>
      <Box className="flex flex-row flex-wrap">
        <Image
          className="m-5"
          src="/instagram/23-11-26.jpeg"
          alt="23-11-26"
          width={500}
          height={500}
        />
        <Image
          className="m-5"
          src="/instagram/23-11-25.jpeg"
          alt="23-11-25"
          width={500}
          height={500}
        />
        <Image
          className="m-5"
          src="/instagram/23-11-24.jpeg"
          alt="23-11-24"
          width={500}
          height={500}
        />
        <Image
          className="m-5"
          src="/instagram/23-11-23.jpeg"
          alt="23-11-23"
          width={500}
          height={500}
        />
        <Image
          className="m-5"
          src="/instagram/23-11-22.jpeg"
          alt="23-11-22"
          width={500}
          height={500}
        />
        <Image
          className="m-5"
          src="/instagram/23-11-21.jpeg"
          alt="23-11-21"
          width={500}
          height={500}
        />
        <Image
          className="m-5"
          src="/instagram/23-11-20.jpeg"
          alt="23-11-20"
          width={500}
          height={500}
        />
        <Image
          className="m-5"
          src="/instagram/23-11-19.jpeg"
          alt="23-11-19"
          width={500}
          height={500}
        />
        <Image
          className="m-5"
          src="/instagram/23-11-18.jpeg"
          alt="23-11-18"
          width={500}
          height={500}
        />
      </Box>
    </Box>
  )
}
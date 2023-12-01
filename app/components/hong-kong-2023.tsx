import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function HongKong2023() {
  return (
    <Box>
      <Image
        src="/HK2023/HK2023pg1.png"
        alt="HK 2023 Page 1"
        width={500}
        height={500}
      />
      <Image
        src="/HK2023/HK2023pg2.png"
        alt="HK 2023 Page 2"
        width={500}
        height={500}
      />
      <Image
        src="/HK2023/HK2023pg3.png"
        alt="HK 2023 Page 3"
        width={500}
        height={500}
      />
      <Image
        src="/HK2023/HK2023pg4.png"
        alt="HK 2023 Page 4"
        width={500}
        height={500}
      />
      <Image
        src="/HK2023/HK2023pg5.png"
        alt="HK 2023 Page 5"
        width={500}
        height={500}
      />
      <Typography variant="h5">More to come, stay tuned!</Typography>
    </Box>
  );
}
